import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import BannerBeta from "./BannerBeta";
import BannerPolicy from "./BannerPolicy";
import BannerV2 from "./Bannerv2";
import BannerV3 from "./Bannerv3";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";


const Policies = () => {

    // window.scrollTo(0, 0);

    return (
        <>

            <BannerPolicy></BannerPolicy>
            <div className={`policy-section inherit-grid`}>
                <div className="general-section section">
                    <h1>Privacy Policy</h1>
                    Our general policy when it comes to privacy is to not log any events related to user activity on our platform.
                    <br /><br />
                    <b> This includes, but is not limited to</b>
                    <br />
                    <br /> - Any account activity such as logins, logouts, account updates, etc
                    <br />- Any connection attempts to the VPN endpoints
                    <br />- Any errors that might happen during user activity
                    <br />- Any statistics generated by user activity

                    <br /><br />
                    In short, we do not log, track or monitor anything regarding what our users are doing within our platform
                </div>

                <div className="cookies-section section">
                    <h1>Cookies</h1>
                    We do not use any cookies for the VPN app, The routing platform or the Website.<br />
                    In fact, we do not use cookies at all, anywhere.
                </div>

                <div className="logging-section section">
                    <h1>Logging Policy</h1>
                    Our platform is designed from the ground up to not log any user activity, but we do collect logs on our platforms general health.
                    <br /><br />
                    <b>  Here is a full list of statistics we collect</b>
                    <br />

                    <br />- Bandwidth usage for each router as a whole, individual users bandwidth is not collected
                    <br />- RAM, CPU, DISK and INODE usage for each router and VPN endpoint. These Statistics are NOT collected on users private VPN endpoints
                    <br />- Dropped and Error packets for each router. This statistic is gathered directly from the operating system
                    <br />- Open socket count for each router. This statistic only shows the overall count of open sockets, without any detailed information on specific sockets.
                    <br /><br />
                    We do realize that debugging problems will be much harder when we are collecting a limited amount of information, but our policy
                    is to protect user privacy and anonymity above anything else.
                </div>


                <div className="payments-section section">
                    <h1>Payments</h1>
                    Our platform offers Cash payments for users that want to stay under the radar, however we do also offer credit card payments and later down the
                    road, we will hopefully offer cryptocurrency payments.
                    <br />
                    <h3>Cash Payments</h3>
                    Cash payments can be sent to our P.O. Box using USD as currency. Each payment sent will need to include a printed activation code that is generated
                    by our platform This code is a one-time only payment code and is deleted once the payment has been registered
                    <h3>Credit Card Payments</h3>
                    Our system uses an API to send credit card information instead of a pre-built form by the vendor, the reason for this is to prevent browser fingerprinting.<br />
                    Additionally, once the payment has been made, any information needed for further payments is migrated to a separate server which is disconnected from
                    the rest of our VPN platform.<br /><br /> This additional server remains disconnected from the internet and is only connected once per day, IF there are subscriptions
                    that need to be renewed. The before mentioned server has full disk encryption and is not stored in any datacenter, rather on site and is connected to the
                    internet using a 4G router with no other devices are connected to. Additionally, this server is operated manually and does not have any open ports.
                    <h3>Crypto Currency Payments</h3>
                    This feature is still on the design table, selecting the right cryptocurrency exchange has been difficult due to lack of support for Monero and high conversion fees.
                </div>


                <div className="personal-section section">
                    <h1>Personal Data</h1>
                    The most important thing for our platform is to protect your personal data at all cost and the best way to do that is to collect as little personal data as possible, preferably no personal data.<br /><br /> We have gone to great lengths to design our platform to not required users to give up any personal information if they do not wish to do so.<br /><br />
                    <b>Here are some of the features/protocols we have implemented in order to protect our users privacy</b>
                    <br />
                    <br />- Cash payments
                    <br />- Token/Username logins without account verification
                    <br />- On-site Encrypted payment processor
                    <br />- Payment data is stored on-site, separated from the user database
                    <br />- Using byte encoded tags for internal routing instead of IP Addresses
                    <br />- IP-Free meta data
                    <br />- Double VPN by default, in most cases packets will pass through three IP Addresses
                    <br /><br />
                    <b>
                        Additionally, we registered NicelandVPN in Iceland. Iceland is not in the Five Eyes, Nine Eyes, or Fourteen Eyes and does not collect nor share intelligence with the U.S., UK or Europe.</b>
                </div>

                <div className="customer-section section">
                    <h1>Customer Support</h1>
                    Our customer support platform is still in development. Picking the right customer support tool is crucial for a platform like Niceland, we need to make sure all data sent by customers can be permanently deleted once it has been reviewed.
                    <br />
                    <Link to={"/beta"}>At the moment we are using customer support over social media channels and regular email, and we encourage all users to read the "NOTICE" section on the beta page</Link>
                </div>

                <div className="thirdp-section section">
                    <h1>Third-Party recipients</h1>
                    Your personal data is only shared in two cases.<br /><br />
                    The first being credit card payment processing, however, no information about your account is shared with the payment processor in order to keep the payment and the account separate.
                    <br /><br />
                    The second is when we need to send email notifications, in which case only your email is shared with the email service, assuming your account is registered with an email, this does not apply to accounts registered with usernames/tokens.
                </div>

                <div className="right-section section">
                    <h1>Data deletion and the individual right</h1>
                    Every user has the right to request a copy of their data and/or to request their data to be deleted.<br /><br /> However, if your account has an active subscription, we cannot delete the payment information until your subscription expires.
                </div>

                <div className="progress-section section">
                    <h1>Still in development</h1>
                    This privacy policy is still in development and we would love to hear from our users regarding what could be improved

                    <br />
                    <br />
                    <b> All data is owned and controlled by</b>
                    <br />
                    <br />
                    <b>
                        Tunnels EHF
                        <br />
                        Reg.No. 4209221080
                        <br />
                        Borgartún 23, 105 Reykjavík
                        <br />
                        Iceland
                        <br />
                        support@nicelandvpn.is
                    </b>
                </div>
            </div>
        </>
    )
}

export default Policies;