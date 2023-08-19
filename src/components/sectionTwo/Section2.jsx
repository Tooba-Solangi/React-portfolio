import juiceGirl from '../../figma-images/images/juiceGirl.png'
import './Section2.css'

const SectionTwo =() =>{


return(
<>

<div className="container mt-5 py-5">

<div className="row">
<div class="row featurette">
      
      <div class="col-md-5 order-md-1">
       <img width={400} src={juiceGirl} alt="" />

      </div>
      <div class="col-md-7 order-md-2">
        <h1 class="featurette-heading"> <b> Let your visitors know <br /> about your features </b>..</h1>
        <p class="lead body">We develop enjoyable consumer experiences, from <br /> digital strategy and content to media and analysis. <br /> Leading to meaningful results and satisfied clients.
</p>
<button type="button" className=" bton rounded-5 px-3 btnn">Our Process</button>
      </div>
    </div>
</div>

</div>





</>




)


}
export default SectionTwo;