class Listbox {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
    }
    init() {
        this.renderUI();

    }
    renderUI() {
        this.root = document.createElement("ul");
        this.root.classList.add("item");
        let str =this.arr.map((ele,index)=>{
            return `<li data-id=${index+1} class="items">
                <div class="proImg">
                    <a href="###"  title="${ele.title}">
                        <img src="${ele.url}" class="forbid-title4" alt=""></a>
                </div>
                <div class="proBot">
                    <dl>
                        <dt><span class="seaNewPrice"><s>&yen;</s>${ele.price}</span></dt>
                        <dd class="newName">
                            <a href="###" target="_blank" class="forbid-title2" title="${ele.title}">${ele.title}</a>
                        </dd>
                        <dd class="newCname">
                            <p><a href="###" class="forbid-title2" title="${ele.newCname}">${ele.newCname}</a></p>
                        </dd>
                        <dd class="newBotBox">
                            <div class="nBotLeft">
                                <div class="areaBox" title="${ele.areaBox}"><span>${ele.areaBox}</span></div>
                            </div>
                            <div class="nBotRight"><a class="newQQIco" target="_blank" href=""title="QQ交谈"><em class="qqonline">&nbsp;</em></a></div>
                        </dd>
                    </dl>
                </div>
            </li>`}).join("");
        this.root.innerHTML = str;
        $(".proListLeft").append(this.root);
    }
}

/*点击每一个商品跳转到详情页，将该商品的id通过url带到详情页*/
// $(".item").on("click","li",function(){
//     console.log(this);
    
//     // let id = $(this)
//     // window.location.href = "./goods.html?" + "id"
// })


