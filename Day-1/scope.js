function a()
{
    var a=10;
    lexical();
    function lexical()
    {
        console.log(a);
    }
}
a();

