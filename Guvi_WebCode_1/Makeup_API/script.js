//Getting values from Rest countries API
fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response=>response.json())
    .then(data=> 
    {
       getData1(data)
    })
let main_card=document.createElement('div')
main_card.setAttribute('class','card text-center')
let header=document.createElement('header')
header.setAttribute('class','card-header')
let card_body_main=document.createElement('div')
card_body_main.setAttribute('class','card-body')
let footer=document.createElement('footer')
footer.setAttribute('class','')
footer.innerHTML=`<div class="container footer_color">
<a href="https://makeup-api.herokuapp.com/" target="_blank" class="link"><span style="color:#c33199"><em>www.makeup-api.herokuapp.com</em></a>.</span>
</div>`
header.innerHTML=`<div class="header-text-box">
            <h1 class="display-4 heading">
              <span class="heading-sub"></span><span class="heading-main">Makeup Products API</span>  
            </h1>
          </div>`
//creation of container
let div=document.createElement('div')
div.setAttribute('class','container')
//creation of Form
let form_div=document.createElement('form')
form_div.setAttribute('class','form-group')
//creation of div
let div_1=document.createElement('div')
div_1.setAttribute('class','row')
let div_2=document.createElement('div')
div_2.setAttribute('class','row')
let div_3=document.createElement('div')
div_3.setAttribute('class','row')
//container for card
let card_container=document.createElement('div')
card_container.setAttribute('class','container')
//Create row and columns and append card
let div_row_card=document.createElement('div')
div_row_card.setAttribute('class','row row-cols-1 row-cols-md-3 g-4')
let div_row_error=document.createElement('div')
div_row_error.setAttribute('class','row')

function getData1(data)
{
    let product_array=[];
    let brand_array=[];
     for(e of data)
        {
            let product=e.product_type;
            let brand=e.brand;
           // console.log(product+"---"+brand)
            product_array.push(product)
            brand_array.push(brand)
        }
       let new_Product=[...new Set(product_array)]
       let new_Brand=[...new Set(brand_array)]
        console.log("Array -->"+new_Product+"----"+new_Brand)

         //create dropdown for product
        function createDropdownProduct(new_Product)
        {
        let div_col1=document.createElement('div')
        div_col1.setAttribute('class','col-6')
        let btn_product_div=document.createElement('div')
        btn_product_div.setAttribute('class','btn-group ')

        let btn_product=document.createElement('select')
        btn_product.setAttribute('type','button')
        btn_product.setAttribute('class', 'btn btn-lg color-btn dropdown-toggle')
        btn_product.setAttribute('data-toggle','dropdown')
        btn_product.id='product';
        btn_product.innerHTML=`<option value="">-- Please choose an option --</option>`
        //insert products into dropdown

        var Products = new_Product.sort();
        console.log("Sort"+Products.sort())
 
        for(var i=0;i<Products.length;i++)
        {     
        var opt = document.createElement("option"); 
        let Caps=Products[i].charAt(0).toUpperCase()+Products[i].slice(1,Products[i].length)
        opt.text = Caps;
        console.log("Caps   "+Caps)
        opt.value = Products[i];
        btn_product.options.add(opt);      
        }

        btn_product_div.append(btn_product)
        div_col1.append(btn_product_div)
        return div_col1;
        }

        //create dropdown for brand
        function createDropdownBrand(new_Brand)
        {
    
        let div_col2=document.createElement('div')
        div_col2.setAttribute('class','col-6')
        let btn_brand_div=document.createElement('div')
        btn_brand_div.setAttribute('class','btn-group')

        let btn_brand=document.createElement('select')
        btn_brand.setAttribute('type','button')
        btn_brand.setAttribute('class', 'btn color-btn btn-lg dropdown-toggle')
        btn_brand.setAttribute('data-toggle','dropdown')
        btn_brand.id='brand';
        btn_brand.innerHTML=`<option value="">-- Please choose an option --</option>`

        //insert products into dropdown
        var Brands = new_Brand.sort()
        console.log(Brands)
        for(var i=0;i<Brands.length;i++)
        {
        if(Brands[i]!=null)
        {    
        var opt = document.createElement("option"); 
        let Caps_Brand=Brands[i].charAt(0).toUpperCase()+Brands[i].slice(1,Brands[i].length)
        opt.text = Caps_Brand;
        opt.value = Brands[i];
        btn_brand.options.add(opt);    
        }  
        }
        btn_brand_div.append(btn_brand)
        div_col2.append(btn_brand_div)
        return div_col2;
        }

let product2=createDropdownProduct(new_Product);
let brand2=createDropdownBrand(new_Brand)
div_1.append(product2,brand2)
//Function end    
}


//Async function to get product details
async function getProducts(product_value,brand_value)
{
    console.log("Async Called")
    try{
        let prod=product_value
        let bran=brand_value
        console.log("Async Called Try  "+bran+"  "+prod)
        let response=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${bran}&product_type=${prod}`)
        //let response=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_value}`)
        let data=await response.json();
        div_row_error.innerHTML=''
        div_row_card.innerHTML=''
        if(data!="")
        {
        console.log("DDD"+data+"TH")
        for(e of data)
        {
            let image_display=e.image_link;
            let name_display=e.name;
            let product_display=e.product_type;
            let brand_display=e.brand;
            let price_display=e.price;
            let description_display=e.description;
            let link_display=e.product_link;
            let color_display=e.product_colors[0].hex_value;
            console.log("Value  "+color_display)

            //create cards and append it to column        
            let div_col_card=document.createElement('div')
            div_col_card.setAttribute('class','col')
            let card_group=document.createElement('div')
            card_group.setAttribute('class','card-group')
        // if(image_display!=""||name_display!="")
            function create_cards(image_display,name_display,product_display,brand_display,price_display,description_display,link_display,color_display)
            {
                console.log("Create card")
                console.log("Check   "+image_display+"   "+name_display+"  "+product_display+"  "+brand_display+"  "+price_display+" "+link_display)
               // console.log("Colors---> "+color_display)
                let card_div=document.createElement('div')
                card_div.setAttribute('class','card h-100')
                card_div.id="div_card"
                card_div.setAttribute('style','width:18rem')
                //create image
                let card_img=document.createElement('img')
                card_img.setAttribute('class','card-img-top')
                card_img.width='150';
                card_img.height='200';
                card_img.src=image_display
            
                //create card-body
                let card_body=document.createElement('div')
                card_body.setAttribute('class','card-body')
                //create header for card
                let card_header=document.createElement('h6')
                card_header.setAttribute('class','card-header text-center fw-bold')
                card_header.innerHTML=name_display;

                let p1=document.createElement('p')
                let p2=document.createElement('p')
                let p3=document.createElement('p')
                p1.setAttribute('class','card-text text-center')
                p2.setAttribute('class','card-text text-center')
                p3.setAttribute('class','card-text text-center')
                p1.innerHTML="Product: "+product_display.charAt(0).toUpperCase()+product_display.slice(1,product_display.length)            
                p2.innerHTML="Brand: "+brand_display.charAt(0).toUpperCase()+brand_display.slice(1,brand_display.length)            
                p3.innerHTML="Price: $"+price_display    
                card_body.append(p1,p2,p3) 
                //Create link
                let card_link=document.createElement('a')
                card_link.setAttribute('class','Card-link')
                card_link.innerHTML=`<a href="${link_display}" target="_blank" class="link"><span style="color:#c33199"><em>Know More</em></a></span>`               
                //create button inside card
                let card_btn=document.createElement('button')
                //card_btn.id='descrip'
                card_btn.setAttribute('type','button')
                card_btn.setAttribute('class','btn color-btn')
                card_btn.innerHTML="Description"
                card_btn.onclick=fetchDescription
                card_btn.setAttribute('role','button')
                card_btn.setAttribute('data-toggle','popover')
                card_btn.setAttribute('data-trigger','focus')
                card_btn.setAttribute('data-placement','top')
                function fetchDescription()
                {
                    
                    $(function () {
                        console.log(description_display)
                        //Popover function
                    $('[data-toggle="popover"]').popover({
                        placement: 'bottom',
                        trigger: 'focus',
                        html: true,
                        content:description_display
                    })
                })
                //Popover dismiss function
                $('.popover-dismiss').popover({
                    trigger: 'focus'
                })
                }
                //Colors to show
                let color_div=document.createElement('div')
                color_div.setAttribute('class','colors-info mb-2')
                let title=document.createElement('p')
                title.setAttribute('class','color-title')
                title.innerHTML=`Color's: `
                let colors=[];
                colors.push(color_display);
                console.log("fdsfsdfsdfs   "+colors)
                let clr=colors.map(function(i)
                {
                    console.log("CCC  "+i)
                    color_div.innerHTML=`<span class="card-text color-box" style="background: ${i};"></span>`
                })
                color_div.append(clr)
                
            
            //Append to card_div
            card_div.append(card_img,card_header,card_body,color_div,card_link,card_btn)
            return card_div;
            }
            let card=create_cards(image_display,name_display,product_display,brand_display,price_display,description_display,link_display,color_display)
            card_group.append(card)
            div_col_card.append(card_group)
            div_row_card.append(div_col_card)
         }
      }
      else{
        console.log("No result found")
        let error_div=document.createElement('row')
        error_div.setAttribute('class','row')
        let error_col=document.createElement('col')
        error_col.setAttribute('class','col-12')
        error_col.innerHTML=`<p><span style="color:red">Sorry, No results found:( </span></p>`
        error_div.append(error_col)
        div_row_error.append(error_div)
      }
    }
    catch(error)
    {
        console.error("Error Reason"+error)
    }
}

//Function to getData from form
function getData(event)
{
    console.log("Helo")
    event.preventDefault();
    let selectElement_Product = document.querySelector('#product');
    let product_value = selectElement_Product.value;
    let selectElement_Brand = document.querySelector('#brand');
    let brand_value = selectElement_Brand.value;
    getProducts(product_value,brand_value)
}

//creation of submit button
function createSubmit()
{ 
let div_col2=document.createElement('div')
div_col2.setAttribute('class','col-12 ')
div_col2.setAttribute('style','margin-top:35px')
let submit=document.createElement('button')
submit.setAttribute('type','submit')
submit.setAttribute('class','btn search-button')
submit.id="submit_btn"
submit.innerHTML=`<h4><em>Submit Here</em><h4>`
submit.onclick=getData
div_col2.append(submit)
div_2.append(div_col2)
return div_col2;
}

let submit=createSubmit()

let label_1=document.createElement('label')
label_1.setAttribute('class','col-6')
label_1.innerHTML=`<h4><span style="color:#c33199"><em>Choose a product</em></span><h4>`
let label_2=document.createElement('label')
label_2.setAttribute('class','col-6  ')
label_2.innerHTML=`<h4><span style="color:#c33199"><em>Choose a brand</em></span><h4>`
div_3.append(label_1,label_2)
form_div.append(div_3,div_1,div_2)
div.appendChild(form_div)
card_container.append(div_row_error,div_row_card)
card_body_main.append(div,card_container)
main_card.append(header,card_body_main,footer)
document.body.append(main_card)














