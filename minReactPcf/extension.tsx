import * as React from 'react';
import { DefaultButton } from '@fluentui/react';
import { IInputs } from "./generated/ManifestTypes";

export interface IButtonProps {
    context: ComponentFramework.Context<IInputs>;
}

export interface IButtonState {
    exampleState: boolean;
}

export class CustomButton extends React.Component<IButtonProps, IButtonState> {

    constructor(props: IButtonProps) {
        super(props);
        this.state = { exampleState: false }
        this.alertClicked = this.alertClicked.bind(this);
    }

    alertClicked(): void {
        alert('Clicked');
    }

   render(){
       return(
        <DefaultButton text="test" />
       )
   }
}