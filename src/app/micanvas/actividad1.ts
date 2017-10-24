
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Button} from '../milib/views/buttons/button';

export class Actividad1 implements EventsAdminListener{

    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private botonInicio:Button;
    private botonContinuar:Button;
    private botonSalir:Button;

    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondo.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);
        
        
        this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);
        
        this.botonInicio=new Button(this.motor,this.panelMenu.w/3,0,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.botonInicio);
        this.botonInicio.setImagePath('./assets/images.png');        
        this.botonInicio.setTexto("Inicio");
        this.botonContinuar.setListener(this);
        
        this.botonContinuar=new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.botonContinuar);
        this.botonContinuar.setImagePath('./assets/images.png');
        this.botonContinuar.setTexto("Continuar");
        
        this.botonSalir=new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3*2,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.botonSalir);
        this.botonSalir.setImagePath('./assets/images.png');
        this.botonSalir.setTexto("Salir");
        
    }

    private crearEscenarioJuego():void{
        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

    buttonListenerOnClick?(btn:Button):void{

    }
}