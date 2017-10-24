import {View} from '../view';
import {Motor} from '../../engines/motor';
import {EventsAdmin} from '../../events/eventsadmin';
import {DataHolder} from '../../dataholder/dataholder';
import {Imagen} from '../imgs/imagen';
import {Button} from '../buttons/button';


/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
export class Window extends View {

    private sColor:string=null;
    private btnSalir:Button=null;
    
    


    constructor(vmotor:Motor,vX:number,vY:number,vW:number,vH:number){
        super(vmotor,vX,vY,vW,vH);

        this.btnSalir=new Button(this.motor,DataHolder.instance.nScreenWidth*0.7,0,DataHolder.instance.nScreenWidth*0.15,DataHolder.instance.nScreenHeight*0.1);     
        this.motor.addViewToParentView(this,this.btnSalir);
        this.btnSalir.setImagePath('./assets/images.png');        
        this.btnSalir.setTexto("Salir");
        this.btnSalir.setColor(null);


    }
    

    /**
     * Metodo de setter para el listener que escuche los eventos del boton.
     */
     
    /*public setListener(listener:ButtonListener):void{
        this.listener=listener;
    }*/


    /**
     * Metodo que fija la imagen de fondo para el boton, que llama al metodo setImg de la clase Imagen
     * @param vsPath String que contendra la ruta a la imagen en los ASSETS. Ej: './assets/btnsback/back1.png'
     */
     
    /*public setImagePath(vsPath:string):void{
        this.imgBack.setImg(vsPath);
    }*/
    
    /**
     * Metodo que setea el color de fondo del boton.
     */
    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    paint(vctx:CanvasRenderingContext2D){
        
        //console.log(this.xa+"========== "+this.ya);
    }

    /**
     * Metodo para setear el texto del boton.
     * @param vtexto String: Texto del boton.
     */
    /*public setTexto(vtexto:string){
        this.lblTexto.setTexto(vtexto);
    }*/

    /**
     * Metodo heredado del padre View que se ejecutara cuando detecte que en el View se ha pinchado con el raton.
     * @param e Evento de MouseEvent con los detalles del evento.
     */
    /*public mouseClicked(e:MouseEvent):void{
        if(this.listener!=null && this.listener.buttonListenerOnClick!=undefined)
            this.listener.buttonListenerOnClick(this);
    }*/
    

}

/**
 * Interface que representara el listener del Boton.
 */
export interface ButtonListener{
    /**
     * Metodo de notificacion del boton para avisar de que se ha presionado en el boton.
     */
    buttonListenerOnClick?(btn:Button):void;
   
}