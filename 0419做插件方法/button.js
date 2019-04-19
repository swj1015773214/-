function Zj(){
    this.value = 0
    this.init()
}
Zj.prototype = {
    init(){
        this.mcenter = document.createElement('center')
        this.mdiv = document.createElement('div')
        this.mbuttonLeft = document.createElement('button')
        this.minput = document.createElement('input')
        this.mbuttonRight = document.createElement('button')
        this.mbuttonLeft.addEventListener('click',this.sub.bind(this))
        this.mbuttonRight.addEventListener('click',this.add.bind(this))
        this.mbuttonLeft.innerText = '-'
        this.mbuttonRight.innerText = '+'
        this.minput.value = 0
        this.mdiv.appendChild(this.mbuttonLeft)
        this.mdiv.appendChild(this.minput)
        this.mdiv.appendChild(this.mbuttonRight)
        this.mcenter.appendChild(this.mdiv)
        document.body.appendChild(this.mcenter)
    },
    add(){
        this.value++
        this.minput.value = this.value
    },
    sub(){
        this.value--
        if(0 >= this.value){
            this.value = 0
        }
        this.minput.value = this.value
    }
}