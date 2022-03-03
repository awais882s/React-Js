import twitter from "../Assets/twitter.jpg"
import insta from "../Assets/insta.jpg"
import facebook from "../Assets/facebook.jpg"
import tray from "../Assets/tray.jpg"
import coal from "../Assets/coal.jpg"
function FirstSection() {
    return (
        <>
            <table />
            <tr>
                <center><h3>Ara Profile</h3></center>
            </tr>
            <tr />
            <td><p> ipsum dolor sit amet consectetur adipisicing elit.
                Quos quas unde rem at tenetur sapiente excepturi odio magni nisi neque? <br />Ipsa similique
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quidem tempore consequatur.
                Modi neque animi <br />reprehenderit at cupiditate corporis facere impedit laborum illo veniam
                totam maiores, quibusdam ut obcaecati iure. </p></td>
            <td />
            <img src={twitter} alt="twitter-pic" />

            <img src={insta} alt="insta-pic" />
            <img src={facebook} alt="facebook-pic" width="30px" height="30px" />
            <br />
            <a href="https://web.facebook.com/muhammadawais882">facebook.com/MuhammadAwais</a>
            <td />
            <tr />
            <table />


            <table>
                <tr>
                    <td ><img src={tray} alt="img" width="350px" height="300px" /></td>


                    <td>
                        <h3>Cable Tray</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea rerum dicta<br />
                            veritatis asperiores voluptatibus quaerat nam tenetur ab cum. Exercitationem <br />
                            maiores nemo perspiciatis laboriosam aliquid deserunt commodi dolorem in.<br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea rerum dicta<br />
                            veritatis asperiores voluptatibus quaerat nam tenetur ab cum. Exercitationem <br />
                            maiores nemo perspiciatis laboriosam aliquid deserunt commodi dolorem in.<br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea rerum dicta<br />
                            veritatis asperiores voluptatibus quaerat nam tenetur ab cum. Exercitationem <br />
                            maiores nemo perspiciatis laboriosam aliquid deserunt commodi dolorem in.</p>
                    </td>
                    <td>
                        <img src={coal} alt="img 2" width="300px" height="150px" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing<br />
                            elit. Pariatur numquam exercitationem architecto id<br />
                            repudiandae aperiam eos impedit ut eum? Minima fuga<br />
                            animi veniam blanditiis sit veritatis voluptas est<br />
                            eos ex.</p>
                    </td>

                </tr>
            </table>
        </>
    )

}
export default FirstSection;