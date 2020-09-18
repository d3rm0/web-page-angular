export class DestinoViaje {
    private selected: boolean;
    public servicios: string [];

    constructor(public nombre: string, public u: string) { 
        this.servicios = ['Pileta', 'Desayuno'];
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected(s:boolean) {
        this.selected = s;
    }
}