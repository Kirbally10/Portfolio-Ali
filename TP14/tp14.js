function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=2; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table");
}
function affichagetab2(){
    var X=prompt("Combien de ligne ?");
    document.write("<table border=2px width=30%");
    for (let i=1; i<=X; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>")
}
function seconnecter(){
    
}