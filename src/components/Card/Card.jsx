
import "./card.css"
import sikka from '../../figma-images/images/sikka.png'
import hand from '../../figma-images/images/hand.png'
import blocks from '../../figma-images/images/blocks.png'

const Card =() =>{
return(

<>
<div className="background-color">
<div className="container">
<h1 className="cardhding mt-5 ">I want company feature</h1>
<h6 className="pra">We believe scaling startups require a radically different kind of agency</h6>


<div>


<div class="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center ">
      <div class="feature col block">
        <div class="feature-icon ">
        <img src={sikka} alt="" />
        </div>
        <h2 className="text-center all">Easy to purchase</h2>
        <p className="text-center pr2">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
     
      </div>
      <div class="feature col block2 ">
        <div class="feature-icon">
       <img src={hand} alt="" />
        </div>
        <h2 className="text-center text-white all">Strategy</h2>
        <p className="text-center text-white pr2">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
      
      </div>
      <div class="feature col block">
        <div class="feature-icon">
        <img src={blocks} alt="" />
        </div>
        <h2 className="text-center all">Agency Web</h2>
        <p className="text-center pr2">A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
     
      </div>
    </div>



</div>
</div>
</div>

</>

)


}
export default Card;