function Img(name,dizhi,price){
    this.hp = dizhi
    this.nm = name
    this.pr = price
    this.mg()
}
let flag = false
Img.prototype = { 
    mg(){
        
        this.mdiv = document.createElement('div')
        this.mdiv.style.float = 'left'
        this.mdiv.style.margin = '10px'
        this.mdiv.addEventListener('click',this.zhuanHuan.bind(this))
        this.mcenter = document.createElement('center')
        this.mh1 = document.createElement('h1')
        this.mimg = document.createElement('img')
        this.mh2 = document.createElement('h2')
        this.mh1.innerText = this.nm
        this.mimg.setAttribute('src',this.hp)
        this.mh2.innerText = this.pr
        this.mcenter.appendChild(this.mh1)
        this.mcenter.appendChild(this.mimg)
        this.mcenter.appendChild(this.mh2)
        this.mdiv.appendChild(this.mcenter)
        document.body.appendChild(this.mdiv)
        
    },
    zhuanHuan(){
        flag = !flag
        this.mdiv.style.background = flag?'orange':'white'
    }
}