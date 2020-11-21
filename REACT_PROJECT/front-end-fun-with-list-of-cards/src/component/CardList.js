import React from 'react'
import Card from './Card'

function CardList() {
    return (

        <div className="row">
            <div className="col-sm-4">
                <Card
                    featureImage="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp"
                    title="How To Make Interactive ReactJS Form"
                    description="Let's write some interactive form with React"
                    link="https://sebhastian.com/interactive-react-form" />
            </div>
           
            <div className="col-sm-4">
                <Card 
                featureImage="https://cdn.britannica.com/s:800x450,c:crop/34/180334-138-4235A017/subordinate-meerkat-pack.jpg"
                title="How To Make Interactive ReactJS Form"
                description="Let's write some interactive form with React"
                link="https://sebhastian.com/interactive-react-form" 
                />
            </div>
            
            <div className="col-sm-4">
                <Card
                featureImage="https://i.insider.com/5f3fe11189aff80028ab71ff?width=750&format=jpeg&auto=webp"
                title="How To Make Interactive ReactJS Form"
                description="Let's write some interactive form with React"
                link="https://sebhastian.com/interactive-react-form" 
                 />
            </div>
        </div>
    )
}

export default CardList
