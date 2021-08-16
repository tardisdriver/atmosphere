<template>
<div>
    <h2 style="margin-top:70px;">Meet the Team</h2>
    <div id="team">
        <div class="team-left">
            <div>
                <h3>Sean Foster aka Crypto Jesus</h3>
                <h4>CEO & Co-founder</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                <div class="socials">
                    <img src="../assets/linkedin.png" height="30px" width="30px" />
                    <img src="../assets/twitter.png" height="30px" width="30px" />
                </div>
            </div>
            <img class="team-headshot" src="../assets/mathew-mcconaughey.jpeg"/>
             
        </div>
        <div class="team-right">
            <img class="team-headshot" src="../assets/tierney.jpeg"/>
            <div>
                <h3>Tracy Stark</h3>
                <h4>CTO & Co-founder</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                <div class="socials">
                    <img src="../assets/linkedin.png" height="30px" width="30px" />
                    <img src="../assets/twitter.png" height="30px" width="30px" />
                </div>
            </div>
        </div>
    </div>
    <div class="live-streaming-container">
        <h3>Watch Crypto Jesus and Tracy live every Monday through Friday, 6pm Central</h3>
        <div class="live-streaming">
            <div class="live-stream-item">
                <img height="30px" width="30px" src="../assets/youtube.png"/>
                <span>Crypto Jesus Youtube</span>
            </div>
            <div class="live-stream-item">
                <img height="30px" width="30px" src="../assets/twitch.png"/>
                <span>CryptoH0use Twitch</span>
            </div>
            <div class="live-stream-item">
                <img height="30px" width="30px" src="../assets/dlive.png"/>
                <span>CryptoHouse DLive</span>
            </div>
            <div class="live-stream-item">
                <img height="30px" width="30px" src="../assets/facebook.png"/>
                <span>CryptoHouse Facebook Live</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Team",
}
</script>
<style lang="scss">
#team {
    display:flex;
    justify-content: space-around;
    margin: 30px 50px;
    .team-left, .team-right {
        max-width:40%;
        display:flex;
        align-items: center;
        justify-content:center;
        div {
            max-width: 60%;
            padding: 20px;
            .socials {
                display:flex;
                justify-content:space-evenly;
            }
            img {
                border-radius:4px;
                background-color:white;
            }
        }
        .team-headshot {
            border-radius: 50%;
            height:200px;
            width: 200px;
        }
    }
    .team-left {
        text-align:left;
    }
    .team-right {
        text-align:right;
    }
}
    .live-streaming-container {
        width: 50%;
        margin: auto;
        .live-streaming {
            display:flex; 
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .live-stream-item {
                display:flex;
                align-items: center;
                width:35%;
                margin: 3px 0;
                img {
                    margin-right:10px;
                    border-radius: 4px;
                }
            }
        } 
    }
</style>