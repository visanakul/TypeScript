document.write("<b>Hello World!!!</b>");
console.info("Hello wirld!!!");
var roll:number=10;
var per:number=98.34;
var hex:number=0x1a;
var oct:number=0o10;
var bin:number=0b1100;
document.write("<hr/>Numeric Variables<hr/>");
document.write("Roll : "+roll);
document.write("<br>Per : "+per);
document.write("<br>Hex : "+hex);
document.write("<br>Octal : "+oct);
document.write("<br>Binary : "+bin);

var sname:string="Vishal";
var grade:string='A-Grade';
var msg:string=`Hello all ${sname} 
                has got ${grade}`;

document.write("<hr/>String Variables<hr/>");
document.write("Name "+sname);
document.write(`<br/>Garde : ${grade}`);
document.write("<br/>Message : "+msg);

var flag:boolean=true;
document.write("<hr/>Boolean Variable<hr/>");
document.write("Flag "+flag);

var obj:any="Hello";
document.write("<hr/>Any type Variable<hr/>");
document.write("<br/>Obj : "+obj);
obj=100;
document.write("<br/>Obj : "+obj);
obj=23.45;
document.write("<br/>Obj : "+obj);
obj=true;
document.write("<br/>Obj : "+obj);

var stdJSON:any=`{"roll":1,"name":"vishal","per":98.32}`;
interface std{
    roll:number;
    name:string;
    per:number;
}
let stdObj:std=JSON.parse(stdJSON);
document.write("<hr/>Json Object : <hr/>");
document.write("<br/>Roll : "+stdObj.roll);
document.write("<br/>Name : "+stdObj.name);
document.write("<br/>Per : "+stdObj.per);

var rolls:Array<number>=[1,2,3,4,5];
var pers:number[]=[6.5,7.1,8.3,9.7,10.2];
var names:Array<string>=["One","Two","Three"];
var counts:string[]=["First","Second","Third"];
var stdList:Array<any>=['{"roll":1,"name":"vishal","per":98.32}','{"roll":1,"name":"vishal","per":98.32}','{"roll":1,"name":"vishal","per":98.32}'];
document.write("<hr/>Decimal Array : <hr/>");
rolls.forEach(function(element,index){
    document.write("<br/>"+element+" at index : "+index);
});
document.write("<hr/>Double Array : <hr/>");
pers.forEach(function(element,index){
    document.write("<br/>"+element+" at index : "+index);
});
document.write("<hr/>String Array 1 : <hr/>");
names.forEach(function(element,index){
    document.write("<br/>"+element+" at index : "+index);
});
document.write("<hr/>String Array 2 : <hr/>");
counts.forEach(function(element,index){
    document.write("<br/>"+element+" at index : "+index);
});
document.write("<hr/>Json Array 2 : <hr/>");
stdList.forEach(function(element){
    document.write("<br/>"+element);
    let stdObj:std=JSON.parse(element);
    document.write("<br/>Roll : "+stdObj.roll);
    document.write("<br/>Name : "+stdObj.name);
    document.write("<br/>Per : "+stdObj.per);
});

