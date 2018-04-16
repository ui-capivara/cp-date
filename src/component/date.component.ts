export class CapivaraDate {
    public $constants;
    public $functions;
    public $bindings;

    private componentName: string;
    private visibleDate: boolean = false;

    constructor(){
    }

    openDate(){
        this.visibleDate = !this.visibleDate;
    }

}