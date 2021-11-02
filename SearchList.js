// place list
const samplePlaceList = [
    {
      address_name: '제주특별자치도 제주시 아라일동 6050-1',
      category_group_code: '',
      category_group_name: '',
      category_name: '가정,생활 > 반려동물 > 반려동물미용',
      distance: '8781',
      id: '1264588511',
      phone: '010-2070-4225',
      place_name: '안녕상이친구들',
      place_url: 'http://place.map.kakao.com/1264588511',
      road_address_name: '제주특별자치도 제주시 아란7길 47',
      x: '126.540374448185',
      y: '33.4742447258829'
    },
    {
      address_name: '제주특별자치도 제주시 아라일동 6104-6',
      category_group_code: '',
      category_group_name: '',
      category_name: '가정,생활 > 상설할인매장 > 의류할인매장',
      distance: '8919',
      id: '126205861',
      phone: '070-4945-9731',
      place_name: '안녕다니여노',
      place_url: 'http://place.map.kakao.com/126205861',
      road_address_name: '제주특별자치도 제주시 인다9길 3',
      x: '126.545552561309',
      y: '33.475456631419'
    },
    {
      address_name: '제주특별자치도 제주시 삼도이동 887-1',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 한식 > 해물,생선 > 굴,전복',
      distance: '13229',
      id: '776635732',
      phone: '064-751-4716',
      place_name: '안녕전복',
      place_url: 'http://place.map.kakao.com/776635732',
      road_address_name: '제주특별자치도 제주시 관덕로 3',
      x: '126.51960431663615',
      y: '33.51284610493464'
    },
    {
      address_name: '제주특별자치도 제주시 이도이동 1773-21',
      category_group_code: '',
      category_group_name: '',
      category_name: '가정,생활 > 미용',
      distance: '11741',
      id: '1437975132',
      phone: '',
      place_name: '안녕피어싱',
      place_url: 'http://place.map.kakao.com/1437975132',
      road_address_name: '제주특별자치도 제주시 서광로 296',
      x: '126.528123663346',
      y: '33.5002872233705'
    },
    {
      address_name: '제주특별자치도 제주시 조천읍 선흘리 1947-2',
      category_group_code: 'CE7',
      category_group_name: '카페',
      category_name: '음식점 > 카페 > 테마카페 > 북카페',
      distance: '16622',
      id: '1166500601',
      phone: '010-2679-0475',
      place_name: '안녕토르',
      place_url: 'http://place.map.kakao.com/1166500601',
      road_address_name: '제주특별자치도 제주시 조천읍 선진길 7-19',
      x: '126.70344975434755',
      y: '33.45974396240917'
    },
    {
      address_name: '제주특별자치도 제주시 조천읍 함덕리 951-1',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 한식',
      distance: '19943',
      id: '1365578276',
      phone: '064-784-2467',
      place_name: '안녕제주',
      place_url: 'http://place.map.kakao.com/1365578276',
      road_address_name: '제주특별자치도 제주시 조천읍 함덕18길 19',
      x: '126.67019389030771',
      y: '33.539394631625385'
    },
    {
      address_name: '제주특별자치도 제주시 이도이동 1773-21',
      category_group_code: '',
      category_group_name: '',
      category_name: '가정,생활 > 패션 > 보석,귀금속',
      distance: '11742',
      id: '192368833',
      phone: '',
      place_name: '안녕주얼리',
      place_url: 'http://place.map.kakao.com/192368833',
      road_address_name: '제주특별자치도 제주시 서광로 296',
      x: '126.528094558859',
      y: '33.5002961284484'
    },
    {
      address_name: '제주특별자치도 제주시 애월읍 하귀1리 1650-1',
      category_group_code: 'AD5',
      category_group_name: '숙박',
      category_name: '여행 > 숙박 > 펜션',
      distance: '16123',
      id: '124975611',
      phone: '064-712-0101',
      place_name: '안녕바다야',
      place_url: 'http://place.map.kakao.com/124975611',
      road_address_name: '제주특별자치도 제주시 애월읍 하귀12길 39',
      x: '126.408631202865',
      y: '33.4877762145926'
    },
    {
      address_name: '제주특별자치도 제주시 조천읍 함덕리 272-43',
      category_group_code: 'AD5',
      category_group_name: '숙박',
      category_name: '여행 > 숙박 > 게스트하우스',
      distance: '20280',
      id: '1128780110',
      phone: '010-4484-8556',
      place_name: '안녕함덕',
      place_url: 'http://place.map.kakao.com/1128780110',
      road_address_name: '제주특별자치도 제주시 조천읍 함덕로 10',
      x: '126.673725813202',
      y: '33.5409745624805'
    },
    {
      address_name: '제주특별자치도 제주시 한림읍 협재리 1450-1',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 한식',
      distance: '27623',
      id: '1614966348',
      phone: '064-796-0624',
      place_name: '안녕협재씨',
      place_url: 'http://place.map.kakao.com/1614966348',
      road_address_name: '제주특별자치도 제주시 한림읍 협재1길 55',
      x: '126.2453300552408',
      y: '33.39898331799428'
    },
    {
      address_name: '제주특별자치도 제주시 구좌읍 김녕리 6107-1',
      category_group_code: 'AD5',
      category_group_name: '숙박',
      category_name: '여행 > 숙박 > 게스트하우스',
      distance: '25318',
      id: '1169716444',
      phone: '010-8060-3114',
      place_name: '안녕김녕씨',
      place_url: 'http://place.map.kakao.com/1169716444',
      road_address_name: '제주특별자치도 제주시 구좌읍 구좌해안로 178',
      x: '126.731374027033',
      y: '33.5593396451047'
    },
    {
      address_name: '제주특별자치도 제주시 구좌읍 동복리 1418-2',
      category_group_code: 'AD5',
      category_group_name: '숙박',
      category_name: '여행 > 숙박 > 게스트하우스',
      distance: '23516',
      id: '25038426',
      phone: '010-3386-8848',
      place_name: '안녕프로젝트 게스트하우스',
      place_url: 'http://place.map.kakao.com/25038426',
      road_address_name: '제주특별자치도 제주시 구좌읍 동복로2길 12',
      x: '126.712281141554',
      y: '33.5520515517475'
    },
    {
      address_name: '제주특별자치도 제주시 애월읍 하귀2리 1384-5',
      category_group_code: '',
      category_group_name: '',
      category_name: '가정,생활 > 패션 > 의류판매',
      distance: '15873',
      id: '1804154070',
      phone: '',
      place_name: '안녕제주',
      place_url: 'http://place.map.kakao.com/1804154070',
      road_address_name: '제주특별자치도 제주시 애월읍 항몽로 32',
      x: '126.405459854681',
      y: '33.4807484923111'
    },
    {
      address_name: '제주특별자치도 제주시 이도1동 1258-16',
      category_group_code: '',
      category_group_name: '',
      category_name: '서비스,산업 > 여행사',
      distance: '11842',
      id: '1683987188',
      phone: '',
      place_name: '안녕제주',
      place_url: 'http://place.map.kakao.com/1683987188',
      road_address_name: '제주특별자치도 제주시 동광로 7',
      x: '126.529869855504',
      y: '33.5013577402428'
    },
    {
      address_name: '제주특별자치도 제주시 조천읍 북촌리 976',
      category_group_code: 'CE7',
      category_group_name: '카페',
      category_name: '음식점 > 카페',
      distance: '20955',
      id: '1864763861',
      phone: '064-782-0570',
      place_name: '안녕돌하르방',
      place_url: 'http://place.map.kakao.com/1864763861',
      road_address_name: '제주특별자치도 제주시 조천읍 북촌서1길 70',
      x: '126.688580946147',
      y: '33.5387696478954'
    }
  ]

const searchForm = document.querySelector("#search-form");
console.log(searchForm);

searchForm.addEventListener("submit", submitSearchKeyword);

function submitSearchKeyword(event){
  event.preventDefault();
  const input = searchForm.querySelector("input");
  //server로 키워드 전송
  
  //socket.emit("search_keyword", input.value);
  input.value = "";

  //temp
  socketReturn();
}

//temp
function socketReturn(){
  new SearchList(document.querySelector(".search-list__ul"), samplePlaceList);
}

class PlaceItem {
    constructor(place_name, road_address_name, place_url, x, y){
        this.elements = {};

        this.elements.root = PlaceItem.createRoot();
        this.elements.title = this.elements.root.querySelector("span");
        this.elements.roadAdr = this.elements.root.querySelector("p");
        this.elements.moreButton = this.elements.root.querySelector("button");
        
        this.elements.title.textContent = place_name;
        this.elements.roadAdr.textContent = road_address_name;
        this.elements.root.dataset.x = x;
        this.elements.root.dataset.y = y;
        this.elements.moreButton.textContent = "💬"


        this.elements.moreButton.addEventListener("click", (event) => {
            window.open(place_url);
            event.stopPropagation()
        });

        this.elements.root.addEventListener("click", () => {
            //day plan 칸반보드에 들어가도록 해야 한다
            alert("hello");
        });

    
    }   

    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(`
        <li>
            <span></span>
            <button></button>
            <p></p>
        </li>
        `).children[0];
    }

}

class SearchList {
    constructor(root, placeList){
        this.root = root;
        

        placeList.forEach((place) => {
            this.renderItem(place);
        })
    }

    renderItem(place){
        //서버에서 받아서 render
        //ToDo : create Place items Instance
        const placeItem = new PlaceItem(place.place_name, 
            place.road_address_name, 
            place.place_url,
            place.x, place.y);
        
        this.root.appendChild(placeItem.elements.root);
    }
    
  

    
}

