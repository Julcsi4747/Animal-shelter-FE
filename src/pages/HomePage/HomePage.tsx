import React from "react";
import classes from "../SuccessesPage/Successes.module.scss";

const HomePage = () => {
    return <div className="container d-flex justify-content-center">
        <div className="p-4 text-center">
            <div className="card my-4  p-4 bg-white shadow text-center">
                <h5>Főoldal</h5>
                <div className="card p-5 shadow bg-success bg-opacity-50">
                    <div className=".row:after">
                        <div className=".column .left">
                        <img className="img popover" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-1581013857.jpg?crop=0.87845xw:1xh;center,top&resize=980:*"/>
                        </div>
                        <div className=".right">
                            <div
                                className={classes.SuccessImage}
                                style={{ backgroundImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-1581013857.jpg?crop=0.87845xw:1xh;center,top&resize=980:*" }}
                            />
                                <div className="d-flex flex-column">Tappancs Állatmenhely</div>

                            <p><strong className="btn">100% hűség</strong><br/> </p>
                        </div>
                    </div>
                </div>
                <div className="text-start my-4">
                NYITVA TARTÁS:<br/> H-P: 14-17h<br/> Szombat, vasárnap és ünnepnap: 9-12h
                </div>
                <h3 className="text-start">Rólunk</h3>
                <div className="text-lg-start">
                <p><br/> A kutyák és cicák oltva, féregtelenítve és bolhátlanítva várják gazdijukat és örökbefogadási
                    szerződéssel vihetők el. Egészséges vagy gyógyítható állatot nem altatunk!<br/> VÁRJUK
                        ÖNKÉNTESEK JELENTKEZÉSÉT BÁRMILYEN SEGÍTSÉGGEL! (sétáltatás, takarítás stb.)<br/> Megkérjük a
                            menhelyre először kilátogató önkénteseket, hogy feltétlenül regisztrálják magukat előzetesen
                            telefonon, így olyan időpontot tudunk megbeszélni, amikor régi önkénteseink kint vannak és
                            tudnak időt szakítani a menhely és az állatok bemutatására. Szervezett segítőnapokat
                            általában a hétvégeken tartunk, amikor egy kölcsönös bemutatkozás, rövid ismerkedés után
                            mindenki eldönti, miben tud/szeretne a későbbiekben segíteni. Köszönjük!<br/>
                                CICABARÁTOK FIGYELEM! FOLYAMATOSAN KERESÜNK IDEIGLENES BEFOGADÓKAT, akik
                                    átmenetileg tudnának gondoskodni otthonukban egy-egy cicáról (esetleg többről
                                    egyszerre). Élelmet, macskaalmot, egyéb felszerelést természetesen biztosítunk az
                                    ideiglenesen befogadott cicákhoz. Érdeklődni a 20/445-6572-es számon lehet.</p>
                <p>VÁRJUK CICABARÁT ÖNKÉNTESEK SEGÍTSÉGÉT IS! A cicák gondozásában szeretnénk segítséget kérni eseti
                    jelleggel, főleg hétvégéken. Kérjük, keressék Katát a menhelyen. <br/> Nem feletkezhetünk meg az
                        egyéb kisállatokról sem a kutyák és a cicák mellett! Nyuszik, tengerimalacok, hörcsögök, esetleg
                        madarak vagy más kisállatok mentésével kapcsolatban a következő telefonszámon érdeklődhetnek: 06
                        309 360 650. Ezen kisállatok átvétele csak ezen a számon való előzetes egyeztetés után történhet
                        meg.<br/> Menhelyünk nem azonos a felszámolt Bőny-Szőlőhegyi Csizmás Kandúr teleppel.
                            Jelenleg Alapítványunk működteti a megye egyetlen állatmenhelyét.</p>
                </div>
            </div>
        </div>
    </div>
};

export default HomePage;