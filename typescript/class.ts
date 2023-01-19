class employee{
    private name: string;
    private age: number;
    private salary: number;

    constructor(n: string, a: number, s: number){
        this.name = n;
        this.age = a;
        this.salary = s;
    }

    staff(){
        return this.name, this.age, this.salary
    }
}

const sakib = new employee("Sakib", 26, 90000);