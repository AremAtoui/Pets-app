import './contact.css';
import React, { useState } from "react";
import { VscHome } from "react-icons/vsc";
import { SlGlobe } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { GoCloud } from "react-icons/go";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaRegEnvelope } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";



function Contact() {
    const [counter, setcounter] = useState(false);
    return (
        <div id="contact">
            <section class="features1 cid-rGtCak0QVE" id="info1-3h">




                <div class="container1">
                    <div class="row1" style={{
                        width: "1120px",
                        display: "flex",
                        flexDirection: "row",
                    }}>

                        <div class="card col-12 col-md-12 col-lg-4">
                            <div class="card-wrapper">

                                <div class="card-boxx">
                                    <h4 class="card-titlee mbr-white align-left mbr-bold mbr-fonts-style display-2">Pets Boarding</h4>
                                    <h5 class="mbr-text align-left mbr-bold mbr-fonts-style display-2">40% OFF
                                    </h5>

                                </div>
                            </div>
                        </div>
                        <div class="card col-12 col-md-12 col-lg-4">
                            <div class="card-img align-center">

                                <img src="https://mobirise.com/extensions/petsm4/assets/images/10.png" />
                            </div>
                        </div>
                        <div class="card col-12 col-md-12 col-lg-4">
                            <div class="bone-col m-auto">

                                <div class="link-wrap">
                                    <img class="bone" src="https://mobirise.com/extensions/petsm4/assets/images/bone.png" />
                                    <h3 class="mbr-section-title mbr-white align-left mbr-bold mbr-fonts-style display-7">BOOK NOW</h3>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section class="form cid-rGtxy1TdOd" id="form3-2m">


                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-md-12 col-lg-6 my-auto img-col">
                            <div class="mbr-figure">
                                <img
                                    style={{
                                        width: "530px",
                                        position: "absolute",
                                        left: "10px",
                                    }} src="https://mobirise.com/extensions/petsm4/assets/images/01.jpg" alt="Mobirise" />
                            </div>

                        </div>


                        <div class="col-lg-6 m-auto mbr-form" data-form-type="formoid">

                            <form action="https://mobirise.com/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name">
                                <input type="hidden" name="email" data-form-email="true" value="yQKlLoRFWk8KujFoZO1QUmoPXBZebeeoopEVqVEiyrzK8BVNOuPSQR3fFbj+RI5zGalFrmA3Pq6UBai4fxKGopF/himIWIQV8LVYpwGHKYJmRyc/t+cNTbtMA+2u+DKQ.RylYoDTBAPqUrGlFg0b0qOH7Ei4VsGyd8Abo5iQyNcPAiHo18Vmv8zy5hKBe0iGr85KNpFaWu5N/wez9FkvD3mmofabI7+WBqmJZ+7l5f/IVNLjXU3koWy+foCel4oKz" />
                                <div class="form-row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out
                                        the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                                        problem!</div>
                                </div>
                                <div class="dragArea form-row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h4 class="mbr-semibold mbr-fonts-style display-7">PLANNING A VACATION?
                                        </h4>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h5 class="mbr-bold pb-3 mbr-fonts-style display-2" style={{ marginTop: "-20px" }}>Contact Us</h5>
                                    </div>
                                    <div data-for="select" class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <div class="jq-selectbox jqselect form-control display-7" id="select-form3-2m-styler"><select name="select" data-form-field="select" class="form-control display-7" id="select-form3-2m">
                                            <option value="Dog Boarding">Dog Boarding</option>
                                            <option value="Cat Boarding">Cat Boarding</option>
                                            <option value="Other Pets">Other Pets</option>
                                        </select><div class="jq-selectbox__select"><div class="jq-selectbox__select-text">Dog Boarding</div><div class="jq-selectbox__trigger">
                                            <div class="jq-selectbox__trigger-arrow"></div></div></div><div class="jq-selectbox__dropdown" style={{ display: "none" }}><ul><li class="selected sel">Dog Boarding</li><li>Cat Boarding</li><li >Other Pets</li></ul></div></div>
                                    </div>
                                    <div data-for="number" class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <div class="jq-number display-7" id="number-form3-2m-styler"><div class="jq-number__field">
                                            <input type="number" name="number" placeholder="Days" data-form-field="number" class="form-control display-7" max="100" min="0" step="1" value="" id="number-form3-2m" /></div><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>
                                    </div>
                                    <div data-for="email" class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="E-mail" data-form-field="email" class="form-control display-7" value="" id="email-form3-2m" />
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary display-7">SEND</button>
                                    </div>
                                </div>
                            </form>

                        </div>




                    </div>

                </div>
            </section>
            {/*  */}
            <section class="progress-bars2 counters cid-rGtBgCg3f6 visible full-visible" id="counters1-31">





                <div class="container">
                    <h2 class="mbr-section-title mbr-bold pb-5 align-center mbr-fonts-style display-2">

                        <div><span style={{ color: "inherit", fontSize: "3.6rem", marginLeft: "230px" }}>Our Achievements</span><br /></div></h2>

                    <div class="row justify-content-center">
                        <div class="card col-6 col-md-6 col-lg-3">
                            <div class="card-ico">
                                <h4 class="mbr-content-title mbr-semibold mbr-fonts-style display-4">STARTED</h4>
                                <span class="mbr-iconfont mbrib-home">
                                    <VscHome className="Laaa" style={{ width: "7%" }} />
                                </span>
                            </div>
                            <div class="card-text">
                                <ScrollTrigger
                                    onEnter={() => setcounter(true)}
                                    onExit={() => setcounter(false)}
                                >
                                    <span>
                                        <h3 class="count mbr-semibold mbr-fonts-style display-2">
                                            {counter && <CountUp start={0} end={213} duration={2} delay={0} />}
                                        </h3>
                                    </span>
                                </ScrollTrigger>


                            </div>
                        </div>


                        <div class="card col-6 col-md-6 col-lg-3">
                            <div class="card-ico">
                                <h4 class="mbr-content-title mbr-semibold mbr-fonts-style display-4">PETS</h4>
                                <span class="mbr-iconfont mbrib-github">
                                    <FaGithub className="Laaa" style={{ width: "50%" }} />
                                </span>
                            </div>
                            <div class="card-text">
                                <ScrollTrigger
                                    onEnter={() => setcounter(true)}
                                    onExit={() => setcounter(false)}
                                >
                                    <span>
                                        <h3 class="count mbr-semibold mbr-fonts-style display-2">
                                            {counter && <CountUp start={0} end={843} duration={2} delay={0} />}
                                        </h3>
                                    </span>
                                </ScrollTrigger>


                            </div>
                        </div>

                        <div class="card col-6 col-md-6 col-lg-3">
                            <div class="card-ico">
                                <h4 class="mbr-content-title mbr-semibold mbr-fonts-style display-4">PLAY DAYS</h4>
                                <span class="mbr-iconfont mbrib-globe-2">
                                    <SlGlobe className="Laaa" style={{ width: "94%" }} />
                                </span>
                            </div>
                            <div class="card-text">
                                <ScrollTrigger
                                    onEnter={() => setcounter(true)}
                                    onExit={() => setcounter(false)}
                                >
                                    <span>
                                        <h3 class="count mbr-semibold mbr-fonts-style display-2">
                                            {counter && <CountUp start={0} end={639} duration={2} delay={0} />}
                                        </h3>
                                    </span>
                                </ScrollTrigger>


                            </div>
                        </div>

                        <div class="card col-6 col-md-6 col-lg-3">
                            <div class="card-ico">
                                <h4 class="mbr-content-title mbr-semibold mbr-fonts-style display-4">BATHS</h4>
                                <span class="mbr-iconfont mbrib-cloud">
                                    <GoCloud className="Laaa" style={{ width: "138%" }} />
                                </span>
                            </div>
                            <div class="card-text">
                                <ScrollTrigger
                                    onEnter={() => setcounter(true)}
                                    onExit={() => setcounter(false)}
                                >
                                    <span>
                                        <h3 class="count mbr-semibold mbr-fonts-style display-2">
                                            {counter && <CountUp start={0} end={321} duration={2} delay={0} />}
                                        </h3>
                                    </span>
                                </ScrollTrigger>


                            </div>
                        </div>



                    </div>
                </div>
            </section>
            {/*  */}

            <section class="features1 cid-rGtxBWjaz9" id="map4-2n">
                <div class="container-fluid">

                    <div class="google-map">
         <iframe frameborder="0" style={{ border: "0" }} 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53326.93550705579!2d10.45005685052753!3d33.34668789945711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1254d62866735147%3A0xf085df215e783c40!2zTcOpZGVuaW5l!5e0!3m2!1sfr!2stn!4v1707306159760!5m2!1sfr!2stn" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

                    <div class="row">
                        <div class="carde col-12 col-md-6 col-lg-6 card-col">
                            <div class="card-head">
                                <img style={{
                                    width: "370px",
                                    marginTop: "250px",
                                }} src="https://mobirise.com/extensions/petsm4/assets/images/01.jpg" alt="" title="" />
                            </div>
                            <div class="card-wrapper" style={{
                                paddingLeft: "10px",
                                backgroundColor: "white", paddingBottom: "20px",
                                marginTop: "-20px"
                            }}>
                                <h2 class="mbr-semibold mbr-fonts-style display-4" style={{ paddingTop: "20px" }}>MAIN OFFICE
                                </h2>
                                <h3 class="mbr-bold mbr-fonts-style display-5">Our office</h3>

                                <p class="mbr-text mbr-fonts-style display-4">Interactively coordinate proactive e-commerce via process-centric
                                    “outside the box“ thinking.&nbsp;</p>

                                <div class="item">
                                    <div class="card-img">
                                        <span class="mbr-iconfont mbrib-alert"><HiOutlineBellAlert />  </span>
                                    </div>
                                    <div class="card-box">
                                        <h4 class="card-title mbr-bold mbr-fonts-style display-4">+ 1 555 2367890</h4>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="card-img">
                                        <span class="mbr-iconfont mbrib-letter"><FaRegEnvelope /> </span>
                                    </div>
                                    <div class="card-box">
                                        <h4 class="card-title mbr-bold mbr-fonts-style display-4">support@mobirise.com</h4>
                                    </div>
                                </div>

                            </div>
                        </div>







                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact