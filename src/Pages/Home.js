import React from "react";
import styles from "../cssModules/Home.module.css";

class InfoCards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postsData: [
              { id: 0, body: 'This is the first News post', firstname: 'Howard', lastname: 'Harper', user_title: 'React Developer', post_date: 'Feb 18, 2020' },
              { id: 1, body: 'This is the second News post', firstname: 'Gene', lastname: 'Smith', user_title: 'React Developer', post_date: 'Feb 18, 2020' },
              { id: 2, body: 'This is the third News post', firstname: 'Thomas', lastname: 'Harris', user_title: 'React Developer', post_date: 'Feb 18, 2020' },
              { id: 3, body: 'This is the fourth News post', firstname: 'Frank', lastname: 'Herbert', user_title: 'React Developer', post_date: 'Feb 18, 2020' },
             ]
            }
        }

    render() {
        return(
            <div>
                {
                    this.state.postsData.map((post) => {
                        return(
                            <div className={ styles.infocard } key={ post.id }>
                                <div className={ styles.infouser }>
                                    <div className={ styles.userimg }>
                                        <img></img>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
        )
    }
}

function Home() {
    return(
        <div className={ styles.container }>
<InfoCards> </InfoCards>

        </div>
        
    );
}
export default Home;