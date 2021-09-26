const generatePDF = async (name,cert,number,email,invoid,date,first,second,third,fourth,fifth,sixth,seventh,one,two,three,four,five,six,seven)=>{
    const {PDFDocument, rgb} = PDFLib;


    // /PDF Fetch
    const exBytes = await fetch("invo.pdf").then((res) => {
        return res.arrayBuffer();
    });

    // /First Font Fetch

    const exFont = await fetch("KohSantepheap-Regular.ttf").then((res) => {
        return res.arrayBuffer();
    });

     // /Second Font Fetch

    const exFont2 = await fetch("Lora-SemiBold.ttf").then((res) => {
        return res.arrayBuffer();
    });

     // /Third Font Fetch

    const exFont3 = await fetch("BebasNeue-Regular.ttf").then((res) => {
        return res.arrayBuffer();
    });

     // /Fourth Font Fetch

    const exFont4 = await fetch("Domine-SemiBold.ttf").then((res) => {
        return res.arrayBuffer();
    });

    const pdfDoc = await PDFDocument.load(exBytes);
    
    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(exFont);
    const myFont2 = await pdfDoc.embedFont(exFont2);
    const myFont3 = await pdfDoc.embedFont(exFont3);
    const myFont4 = await pdfDoc.embedFont(exFont4);

    const pages = pdfDoc.getPages();
    const firstpg = pages[0]
// Top name 

    firstpg.drawText(name,{
        x: 22,
        y: 1540,
        size: 55,
        font: myFont,
        color: rgb(0, 0, 0)        
    })

//Top ID

    firstpg.drawText(cert,{
        x: 22,
        y: 1475,
        size: 44,
        font: myFont,
        color: rgb(0, 0, 0)
    })

//Top Number

    firstpg.drawText(number,{
        x: 23,
        y: 1344,
        size: 35,
        font: myFont2,
        color: rgb(0.2,0.2,0.2)
    })

//Top Email

    firstpg.drawText(email,{
        x: 23,
        y: 1308,
        size: 35,
        font: myFont2,
        color: rgb(0.2,0.2,0.2),
        
    })

//Invo ID

    firstpg.drawText(invoid,{
        x: 21,
        y: 1062,
        size: 61,
        font: myFont3,
        color: rgb(0.85, 0.65, 0.3)
    })


//date

    firstpg.drawText(date,{
        x: 931,
        y: 1062,
        size: 61,
        font: myFont3,
        color: rgb(0.85, 0.65, 0.3)
    })

//First

    firstpg.drawText(first,{
        x: 532,
        y: 642,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//Second

    firstpg.drawText(second,{
        x: 532,
        y: 582,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//third

    firstpg.drawText(third,{
        x: 532,
        y: 522,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//Fourth

    firstpg.drawText(fourth,{
        x: 532,
        y: 462,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//fifth

    firstpg.drawText(fifth,{
        x: 532,
        y: 402,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//sixth

    firstpg.drawText(sixth,{
        x: 532,
        y: 342,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//seventh

    firstpg.drawText(seventh,{
        x: 532,
        y: 282,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//one

    firstpg.drawText(one,{
        x: 1012,
        y: 642,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//two

    firstpg.drawText(two,{
        x: 1012,
        y: 582,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//three

    firstpg.drawText(three,{
        x: 1012,
        y: 522,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//four

    firstpg.drawText(four,{
        x: 1012,
        y: 462,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//five

    firstpg.drawText(five,{
        x: 1012,
        y: 402,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })

//six

    firstpg.drawText(six,{
        x: 1012,
        y: 342,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
//seven

    firstpg.drawText(seven,{
        x: 1012,
        y: 282,
        size: 33,
        font: myFont4,
        color: rgb(0.5, 0.5, 0.5)
    })


    
    

    const uri = await pdfDoc.saveAsBase64({dataUri: true})
    // saveAs(uri, "Invoice", { autoBom: true});
        
    document.querySelector("#mypdf").src = uri;
};

generatePDF("KEERTHANA GUDEMARANAHALLI S ","AL21ST003","9513260295","mouzzamdanishh@gmail.com","INVOICE # 0 6 2 1 0 1 8","19.02.2021","GST","DISCOUNT","FIRST INSTALLMENT","SECOND INSTALLMENT","THIRD INSTALLMENT","TOTAL PAID","REMAINING","$ 41.33","$ 67.53","$ 67.53","$ 108.04","$ 256.60","$ 0.00","$ 40.22");
