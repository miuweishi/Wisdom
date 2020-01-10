/*主页logo的轮播图 strat*/
class Swipe {
    constructor(data) {
      this.data = data;
      this.root = null;
      this.timer = null;
      this.index = 0;
      this.len = this.data.length;
      this.ul = null;
      this.imgWidth = 689;
      this.picbtns = null;
    }
    init() {
      this.renderUI();
      this.autoplay();
      this.eventClickWithPicbtns();
      this.switchNavItem();
    }
    renderUI() {
      this.root = document.createElement("div");
      this.root.classList.add("mad-bx");
      let tpl1 = this.data.map((ele, index) => {
        return `<a href="###">
        <img id="picitem0" src="${ele}">
      </a>`
      }).join("");
      let html = `<div id="piccontent">${tpl1}</div>`;
      let tpl2 = this.data.map((ele, index) =>
        `<span id="picbtn0" class="adnumber">${index + 1}</span>`).join("")
      let html1 = `<div id="picbtns" class="picbtns">${tpl2}</div>`
      let html2 = `<div id="picbtnHolder"
                        style="position:absolute;right:0px;top:275px;height:20px;z-index:4;">${html1}</div>`;
      this.root.innerHTML = html + html2;
      $(".maincont-one-banner").append(this.root);
      this.ul = this.root.querySelector("#piccontent");
      this.picbtns = this.root.querySelector('#picbtns');
    }
  //自动轮播  
    autoplay(){
      this.timer = setInterval(()=>{
        this.index++;
        if(this.index == this.len){
          this.index = 0;
        }
        this.ul.style.left = -(this.index) * this.imgWidth + "px";
        this.switchNavItem();
      },5000)
    }
  //点击小焦点切换图片跟着切换对应的焦点
    eventClickWithPicbtns() {
      Array.from(this.picbtns.children).forEach((ele, index) => {
          ele.onclick = () => {
              /* 更新当前的索引 */
              this.index = index;
              /* 切换显示对应的滑块 */
              this.ul.style.left = -this.index * this.imgWidth + "px";
              this.switchNavItem();
          }
      });
    }
  //切换小焦点
    switchNavItem() {
      Array.from(this.picbtns.children).forEach((ele =>
        ele.classList.remove("active")));
      this.picbtns.children[this.index].classList.add("active");
    }
  }
  /*主页logo的轮播图 end*/