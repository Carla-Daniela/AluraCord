import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
function GlobalStyle() {
    return (

        <style global jsx>{`
            * {
                margin:0;
                padding:0;
                box-sizing:border-box;
                list-style:none;

            }
            body{
                font-family: 'Open Sans', sans-serif;
            }
            /* App fit Height*/
            html, body, #__next{
                min-height:100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex:1;
            }
            #__next > *{
                flex:1;
            }
            
            /* ./App fit Height*/
        `}
        </style>
    );

}

function Titulo(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
        ${Tag}{
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight:600;
            
        }
        `}
            </style>
        </>
    );
}

function HomePage() {
    const username = 'Carla-Daniela';
    return (

        <Box
            styleSheet={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: "url(" + "https://1.bp.blogspot.com/-Yk5_ccD5-Gk/XS_GF28gIOI/AAAAAAAAZa8/RFU2-5DKdnQRr3-is3rQHaNxAlDKR29MgCLcBGAs/s2560/borboletas%2B-azuis%2B-%2Bhd.jpg" + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                color: '#E6E6EA',

            }}
        >
            <GlobalStyle />

            <Box
                styleSheet={{
                    backgroundColor: "#09090B",
                    width: "900px",
                    height: "300px",
                    display: "flex",
                    flexwrap: "wrap",
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'space-around',


                }}
            >
                <div>
                    <Titulo tag="h3">Boas vindas de volta!</Titulo>
                    <h4>Discord - alura matrix</h4>

                    <TextField

                        onChange={function noRefCheck() { }}
                        onKeyPress={function noRefCheck() { }}
                        placeholder=" "
                        styleSheet={{
                            marginTop: '60px',
                            marginRight: '50px',
                            backgroundColor: '#121216',
                            color: 'white'
                        }}

                    />
                    <Button label="Entrar"
                        styleSheet={{
                            marginTop: '20px',
                            marginRight: '50px',
                            width: '250px',
                            backgroundColor: appConfig.theme.colors.primary['200'],
                        }}
                    />
                </div>
                <Box
                    styleSheet={{
                        alignItems: 'center',

                    }}
                >
                    <Image
                        styleSheet={{
                            borderRadius: '50%',
                            marginBottom: '16px',
                            height: '250px',
                        }}
                        src={`https://github.com/${username}.png`}

                    ></Image>
                    <Text
                        variant='body4'
                        styleSheet={{
                            color: appConfig.theme.colors.neutrals['100'],
                            backgroundColor: appConfig.theme.colors.neutrals['900'],
                            marginLeft: '80px',
                            padding: '3px 10px',
                            borderRadius: '1000px'
                        }}
                    >
                        {username}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
export default HomePage