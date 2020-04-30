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
        this.getLocation = this.getLocation.bind(this);
    }

    async getLocation(): Promise<any> {
        debugger;
        var myHeaders = new Headers();

        var requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch(`https://api.weather.gov/points/41.4993,-81.6944`, requestOptions)

            if (response.status !== 200) {
                console.log(`${response.status} ${response.statusText} | ${response.url}`);
                return;
            }

            let responsetext = await response.text();
            let text = JSON.parse(responsetext);

            alert(`Relative Location: ${text.properties.relativeLocation.properties.city}, ${text.properties.relativeLocation.properties.state}`);

        } catch (e) {
            throw e;
        }

    }

    render() {
        return (
            <DefaultButton text="Get Location Data" onClick={this.getLocation} />
        )
    }
}