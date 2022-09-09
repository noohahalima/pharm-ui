import React from "react";
import {Card, CardBody } from "reactstrap";

function Header({name,price}){
    return (
        <div>
            <Card className="my-3 bg-info">
                <CardBody>
                <h1 className="text-center my-5" >Welcome to netmeds</h1>


                </CardBody>
            </Card>
        </div>
    );
}
export default Header;