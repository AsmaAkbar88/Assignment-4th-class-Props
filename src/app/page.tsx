import Card from "./Card";

export default  function Home (){
  return(
    <div className=" flex felx-auto" >
        <Card name='Noor UL Saba'
        rollnum='134'
        distance ='No'
        city='Karachi'
      center='Goverer House Karachi'
        capmus='Main'
        days='Saturday 09:00PM - 12:00PM'
        img='/im.jpg'
        backimg = '/111.jpg'
        />

<Card name='Iqra'
        rollnum='132'
        distance ='No'
        city='Karachi'
      center='Goverer House Karachi'
        capmus='Main'
        days='Friday 09:00PM - 12:00PM'
        img='/im.jpg'
        backimg=""
        />

<Card name='Saima'
        rollnum='136'
        distance ='No'
        city='Karachi'
      center='Goverer House Karachi'
        capmus='Main'
        days='Saturday 02:00PM - 5:00PM'
        img='/girls.jpg'
        backimg=""
        />

    

       


    </div>

  
  )
}