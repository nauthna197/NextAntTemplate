import React from 'react';

function withAuthentication(WrappedComponent : any) {
    return class withAuthentication extends React.Component {
        static async getInitialProps() {

            return {
                me:"",
            }
          }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

export default withAuthentication;