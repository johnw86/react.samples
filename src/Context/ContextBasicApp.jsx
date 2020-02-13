import React from "react";

const AccessibilityContext = React.createContext();

class AccessibilityProvider extends React.Component {
    state = {
        fontSize: 16,
        textColor: "Black"
    };

    render() {
        return (
            <AccessibilityContext.Provider
                value={{
                    state: this.state,
                    increaseFontSize: () =>
                        this.setState({
                            fontSize: this.state.fontSize + 1
                        }),
                    setFontColor: color =>
                        this.setState({
                            textColor: color
                        })
                }}
            >
                {this.props.children}
            </AccessibilityContext.Provider>
        );
    }
}

class AccessibilityTextColor extends React.Component {
    render() {
        return (
            <div className="text-color">
                <AccessibilityContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <input
                                type="text"
                                onChange={e => context.setFontColor(e.target.value)}
                                value={context.state.textColor}
                            ></input>
                            <p style={{ color: context.state.textColor }}>Color: {context.state.textColor}</p>
                        </React.Fragment>
                    )}
                </AccessibilityContext.Consumer>
            </div>
        );
    }
}

class AccessibilityFontSize extends React.Component {
    render() {
        return (
            <div className="font-size">
                <AccessibilityContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <button onClick={context.increaseFontSize}>Increase Font</button>
                            <p style={{ fontSize: context.state.fontSize }}>FontSize: {context.state.fontSize}</p>
                        </React.Fragment>
                    )}
                </AccessibilityContext.Consumer>
            </div>
        );
    }
}

function AccessibilityBar() {
    return (
        <div className="accessibility-bar">
            <AccessibilityProvider>
                <AccessibilityTextColor />
                <AccessibilityFontSize />
            </AccessibilityProvider>
        </div>
    );
}

function Footer(props) {
    return (
        <footer style={{ margin: 10 }}>
            <p>&copy; Basic Context Example</p>
            <AccessibilityBar />
        </footer>
    );
}

export default class ContextBasicApp extends React.Component {
    render() {
        return (
            <Footer>
                <h1>Context Basic Example</h1>
            </Footer>
        );
    }
}
