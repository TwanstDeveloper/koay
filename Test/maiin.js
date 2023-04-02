let info={
    fname:"Twanst",
    lname:"mohammed",
    age:21,
    statuss:"active",
    phone:{
        korek:'07501194258',
        Asiacel:'07701234566',
        zine:'07801234566'
    },
    address:{
        ad1:"Erbil",
        ad2:"Koysnjaq",
    },

    ISstatus:function(){
        if(info.statuss==="active"){
            return true;
        }
        else{return false
        }
    },
    ISages:function(){
    if(info.age>18){
        return "Susseccfully"
    }else{
        return "Faile"
    }
},
proccess:()=>"Done"

}


let infos=new Object({
    totel:"BMW",
    name:"Kosar",
 getnames:function(){
    return this.name
 }
});
//console.log(infos.getnames());

let jdk=this;
//console.log(jdk==window);

let c={
   // infoname:"Twanst",
    getname:function(){
        return `Welcome Dera: ${this.infoname}`
    }
}
// But Beautfuly InSide Update And Value Give Variables
let z=Object.create(c,{
    infoname:{value:"Twanst"}
})
//in Out SIde Update Variables
//z.getname="koya"
//console.log(z.infoname)
/*
let num1={
    num1:1
}
let num2={
    num2:2
}
let num3={
    num3:3
}
let num4=Object.assign(num1,num2,num3)
console.log(num4)*/

let num4={
    num1:1,
    num2:2,
    num3:3
}
console.log(num4)