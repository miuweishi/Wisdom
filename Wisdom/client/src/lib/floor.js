class Floor {
    constructor(data){
        this.data = data;
        this.root = null;
    }
    init(){
        this.renderUI();
        }
    renderUI(){
        let tpl = this.data.lit_title.map((ele,index)=>{
            return`<li><a href="" class=${index==0 ? "pub-main-nav-cur" :""}>${ele}</a></li>`
        }).join("");
        let tpl2 = this.data.smlpic.map((ele,index)=>{
            let li = ele.map(ele=>{
                return `<li><div class="picbox"><a href=""><img alt="" src=${item} /></a></div></li>`
         }).join("");
         return `<ul class="f_listpic">${li}</ul>`
        }).join("")//注意

        let html = `<div class="box">
        <div class="box-header">
            <h2 class="title">${this.data.title}</h2>
            <ul class="box-header-list">
            ${tpl}
            </ul>
        </div> 
        <div class="box-content">
            <div class="left">
                <li><img src=${this.data.srcA} alt=""></li>
                <li><img src=${this.data.srcB} alt=""></li>
            </div>
            <div class="right">
                ${tpl2}
            </div>
        </div>
        </div>`;
        this.root = $(html);
        $('body').append(this.root);//注意
    }
    
}