
const fakeItems = [    
    {
        items : [
            {
                id : 1,
                content : "place 1"
            },

            {
                id : 2,
                content : "place 2"
            },

            {
                id : 3,
                content : "place 3"
            }
        ]
    },

    {
        items : [
            {
                id : 4,
                content : "place 4"
            },

            {
                id : 5,
                content : "place 5"
            }
        ]
    },

    {
        items : [
            {
                id : 6,
                content : "place 6"
            }
        ]
    }

];

let fakeId = 7;
const dayPlanListColumsIds = 3;

/*
const totplanSchema = new mongoose.Schema({
    title: {type: String, unique: true},
    admin: {
        _id: mongoose.Schema.Types.ObjectId,
        name: String
    },
    participants: [{
        _id: mongoose.Schema.Types.ObjectId,
        name: String
    }],
    day_plan: [{
       date: {type :Date, requried:true}, 
       place: [{
           name: String,
           road_adr: String,
           // img 추가할건지 판단
           x : Number,
           y : Number,
           map_link: String
       }]
    }
    ]
})
*/





class DropZone {
    static createDropZone(){
        
		const range = document.createRange();

		range.selectNode(document.body);

		const dropZone = range.createContextualFragment(`
			<div class="kanban__dropzone"></div>
		`).children[0];

		dropZone.addEventListener("dragover", (event) => {
			event.preventDefault();
			dropZone.classList.add("kanban__dropzone--active");
		});

        dropZone.addEventListener("dragleave", (event) => {
            dropZone.classList.remove("kanban__dropzone--active");
        });

        dropZone.addEventListener("drop", (event) => {
            event.preventDefault();
            dropZone.classList.remove("kanban__dropzone--active");

            const columnElement = dropZone.closest(".kanban__column");
            const columnId = Number(columnElement.dataset.id);


            const dropZonesInColumn = Array.from(columnElement.querySelectorAll(".kanban__dropzone"));

            console.log("dropZoneInColumn : ", dropZonesInColumn, "columnElement : ", columnElement, "columnId : ", columnId);
            
            const droppedIndex = dropZonesInColumn.indexOf(dropZone);
            console.log(droppedIndex);

            const itemId = Number(event.dataTransfer.getData("text/plain"));
            const droppedItemElement = document.querySelector(`[data-id="${itemId}"]`);
            const insertAfter = dropZone.parentElement.classList.contains("kanban__item") ? dropZone.parentElement : dropZone;

            if(droppedItemElement.contains(dropZone)){
                return;
            }

            console.log(insertAfter);
            insertAfter.after(droppedItemElement);
            console.log(itemId);
            
            //******DB에 저장
        })

        return dropZone;
    }
}

// map marker도 여기 같이 넣자
class Item {
    constructor(id, content){
        const bottomDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban__item-input");

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;

        this.elements.root.appendChild(bottomDropZone);

        /*
        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();
            console.log(this.content);
            console.log(newContent);
        }
        */

        this.elements.root.addEventListener("dblclick", () => {
            const check = confirm("Are you sure you want to delete this item?");

            if (check){
                fakeItems.splice(id - 1, 1); //DB에서 삭제
                console.log(fakeItems);
                this.elements.root.parentElement.removeChild(this.elements.root); // 컬럼에서 삭제
            }
        });
        this.elements.root.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text/plain", id);
        });

        this.elements.input.addEventListener("drop", event => {
            event.preventDefualt();

        })
    }

    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input"></div>
            </div>
        `).children[0];
    }
}

 class Column {
	constructor(id, title) {    

        const topDropZone = DropZone.createDropZone();


        //하위 element
		this.elements = {};
		this.elements.root = Column.createRoot();
		this.elements.title = this.elements.root.querySelector(".kanban__column-title");
		this.elements.items = this.elements.root.querySelector(".kanban__column-items");
		//this.elements.addItem = this.elements.root.querySelector(".kanban__add-item");
        
        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
        this.elements.items.appendChild(topDropZone);

        /*
        //작동 xx
        this.elements.addItem.addEventListener("click", () => {
            
            const newItem = {id : fakeId++, content : ""};
            this.renderItem(newItem);
        });
        */

        // 각 컬럼 마다 아이템 불러옴

        /*
		KanbanAPI.getItems(id).forEach(item => {
			this.renderItem(item);
		});
        */ 

        fakeItems[id-1]['items'].forEach((item) => {
            this.renderItem(item);
        })
    }

	static createRoot() {
		const range = document.createRange();

		range.selectNode(document.body);

		return range.createContextualFragment(`
			<div class="kanban__column">
				<div class="kanban__column-title"></div>
				<div class="kanban__column-items"></div>
			</div>
		`).children[0];
	}

    renderItem(data){
        //ToDo : create Item Instance
        const item =  new Item(data.id, data.content);
        this.elements.items.appendChild(item.elements.root);
    }
}


 class Kanban {
	constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
			const columnView = new Column(column.id, column.title);
            console.log(columnView.elements.root);
			this.root.appendChild(columnView.elements.root);
		});
	}
    // 서버에서 day  column 받아와야 함 
	static columns(dayPlanListColumsIds) {
        
		return [
			{
				id: 1,
				title: "Day 1"
			},
			{
				id: 2,
				title: "Day 2"
			},
			{
				id: 3,
				title: "Day 3"
			}
		];
	}
}

new Kanban(
    document.querySelector(".kanban")
);