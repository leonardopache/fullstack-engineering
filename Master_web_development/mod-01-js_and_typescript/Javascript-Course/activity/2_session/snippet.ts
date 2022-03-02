let persona = class {
    name: string = "Leonardo";
    age: number = 27;
    profession: string = "Developer";
  }

function objectAttributes(obj :Person){
    var keys = Object.keys(obj);
    console.log(keys)
}
  
  
objectAttributes(persona);
objectAttributes("Leonardo");