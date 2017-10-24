
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/windows/window';
import {Button} from '../milib/views/buttons/button';
import {Label} from '../milib/views/labels/label';

export class Actividad1 implements EventsAdminListener{

    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private btnInicio:Button;
    private btnContinuar:Button;
    private btnSalir:Button;
    private window:Window;
    private lblPregunta:Label;
    private respuesta1:Button;
    private respuesta2:Button;
    private respuesta3:Button;
    private respuesta4:Button;
    private arPreguntas:String[];
    private arRespuestas:Array<String[]>;
    private arRespuestasCorrectas:String[];


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondo.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.crearEscenarioJuego();
        
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
        
        this.btnInicio=new Button(this.motor,this.panelMenu.w/3,0,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.btnInicio);
        this.btnInicio.setImagePath('./assets/images.png');        
        this.btnInicio.setTexto("Inicio");
        this.btnInicio.setListener(this);
        
        this.btnContinuar=new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.btnContinuar);
        this.btnContinuar.setImagePath('./assets/images.png');
        this.btnContinuar.setTexto("Continuar");
        
        this.btnSalir=new Button(this.motor,this.panelMenu.w/3,this.panelMenu.h/3*2,this.panelMenu.w/3,this.panelMenu.h/3);
        this.motor.addViewToParentView(this.panelMenu, this.btnSalir);
        this.btnSalir.setImagePath('./assets/images.png');
        this.btnSalir.setTexto("Salir");
        
    }

    private crearEscenarioJuego():void{
        //PREGUNTAS
        this.arPreguntas = [];
        this.arPreguntas = [
            "¿Qué es blanco y si se cae de un arbol te mata?",
            "¿Qué número si le quitas la mitad da cero?",
            "¿Cuanto tiempo hace falta para cocer un huevo duro?"
        ];
        console.log(this.arPreguntas[0]);
        console.log(this.arPreguntas[1]);
        console.log(this.arPreguntas[2]);


        //RESPUESTAS
        this.arRespuestas = new Array<String[]>();
        let arrAux :String[] = ["Un IceBerg","Un Inglés en Mallorca","Un tiranosaurius Rex albino","Una nevera"]
        this.arRespuestas[0] = arrAux;
        arrAux = ["0.5","2","8","0.000000001"];
        this.arRespuestas[1] = arrAux;
        arrAux = ["13 min","0 min","Lo que dura una partida del pubg","Lo que tarda Tuvilla en marearse en el pubg"];
        this.arRespuestas[2] = arrAux;
        


       //RESPUESTAS CORRECTAS
        this.arRespuestasCorrectas= [this.arRespuestas[0][3],this.arRespuestas[1][2],this.arRespuestas[2][1]];
    

        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

    buttonListenerOnClick?(btn:Button):void{

    }
}