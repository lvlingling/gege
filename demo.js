function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say=function () {
        console.log("hello,"+this.name);
    }
};
var p=new Person("lingling",22);

p.say();
p.say.bind(p)()
p.say.bind(p).call();
p.say.bind(p).apply();
p.say.call(p);
p.say.apply(p)

function say(name,age) {

}

say("linglng",32)






