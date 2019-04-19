function Cj(s){
    this.innerText = s
    this.toast()
}
Cj.prototype = {
    toast(){
        this.mcenter = document.createElement('center')
        this.mdiv = document.createElement('div')
        this.mdiv.style.border = '1px solid black'
        this.mdiv.style.width = '150px'
        this.mdiv.style.height = '100px'
        this.mdiv.style.display = 'none'
        this.mcenter.appendChild(this.mdiv)
        document.body.appendChild(this.mcenter)

        let a = 15
        let b = 14
        let c = 7
        let d = a * b / c

        let yinCang = null

        if(d == this.innerText){
            this.mdiv.style.display = 'block'
            console.log('block')
            this.mdiv.innerText = this.innerText
            
        }else{
            this.mdiv.style.display = 'none'
        }
        if('block' === this.mdiv.style.display){
            yinCang = setTimeout(()=>{
                this.mdiv.style.display = 'none'
            },3000)
        }
    }
}
