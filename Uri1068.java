public class Fila {

    String[] valores;
    int  primeiro;
    int  ultimo;
    int  total;

    public Fila(){
    this.valores = new String[10];
    this.primeiro = 0;
    this.ultimo = 0;
    this.total = 0;

    }

    public void inserir(String elemento){
        valores[ultimo]=elemento;
        ultimo = (ultimo +1) % valores.length;
        total++;
    }
    
    public String retirar(){
        String elemento = valores[primeiro];
        ultimo = (ultimo -1) % valores.length;
        total--;
        return elemento;
    }

    public boolean isEmpety(){
        return total==0;
    }

    public String varificarParenteses(){
        int prAbri=0,prfecha=0;
        String status="";
        for(int s=0;s<ultimo;s++){a
             if (!valores[s].equals("")){
                System.out.println(valores[s]);
                for (int k=0;k<valores[s].length();k++){
                if (valores[s].charAt(k) =='(') {
                    prAbri += 1;
                }
                if (valores[s].charAt(k) ==')'){
                    prfecha += 1;
                }
                }

                if (prAbri != prfecha) {
                    status= "Numero de parenteses incorreto";
                }
                else {
                    for (int l=0;l<valores[s].length();l++){

                        if (((valores[s].charAt(l) == '(')) && valores[s].indexOf(")", l) == -1){
                            status = "Posição do parenteses incorreto";
                        }
                        
                        else if ((valores[s].charAt(l) == ')') && (valores[s].indexOf("(", 0) > l)) {
                            status = "Posição do parenteses incorreto";
                        }    
                        else {
                        status = "Corrigir";
                        }
                    }
                }
            }
        }
            return status;
        
    }

    public boolean isFull(){
        return total==valores.length;
    }

    
    public static void main(String[] args) {
                    
        Fila lista = new Fila();
        
   
        lista.inserir(")3+b*(2-c)(");
        System.out.println(lista.varificarParenteses());
    }

}

