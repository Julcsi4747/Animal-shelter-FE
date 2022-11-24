import React from "react";
import "../HomePage/HomePage.scss";

const HomePage = () => {
    return (
        <div>
            <div id="div1" className="d-flex flex-column">
                <h1><b>Tappancs Állatmenhely</b></h1>
                    <p><h2>100% hűség</h2> </p>
            </div>
                    <div id="div2"  className="card my-4  p-4 bg-white shadow text-center">
                    <h5><b>Adó 1+1 állatvédelemre</b></h5>
                        <p id="p1">Az egy százalék felajánlás segíti az állatvédelem és az állatmenhely fontos feladatainak sikeresebb elvégzését,
                             azaz az utcáról megmentett kutyusok biztonságba helyezését és védelmét.
                             Az 1 százalék felajánlás felett sokan elsiklanak, pedig adóbevalláskor vagy utána május közepéig
                             az adó 1 százalék felajánlás révén úgy lehet támogatni az állatmentő tevékenységet, hogy az közben nem
                             kerül semmibe sem. Sok állatbarát az utcán talált kutyák kapcsán keresi fel a Tappancs Állatmanhely
                             állatvédelmi központját, sokan pedig csak szimplán (állatbarát szemlélet miatt, együttérzésből, odaadásból) szeretnék az állatmenhely támogatása révén segíteni a soha véget nem érő állatmentő feladatokat.
                             A megmentett állatokat Gazdi kereső révén szerető Gazdi jelöltek számára tesszük (meggyógyított, rendbe tett állapotban) örökbe fogadhatóvá.
                            Az állatokat tenyésztők / szaporítók körében nagyon sok az eladó kutya. Sokkal több állatot szaporítanak az emberek, mint amennyire
                             a felelős állattartói kőr igényt tart. A hirdetésekben közzé tett eladó kutyák,
                              eladó házi kedvencek legtöbbje a felelőtlen megvásárlásokat követően megunt
                             tárgyként - gazdátlanul - az utcán köt ki. Kóbor állatként a Tappancs állatmanhely állatvédelmi
                             központjában kerül megmentésre az utcára kitett / elhagyott kutyusok közül évente többszáznyi.
                             Ha kutyát vásárolna, gondoljon az örökbe fogadható házi kedvencekre, válasszon
                             megvásárolható állat helyett az utcáról megmentett, teljesen egészséges, ingyen elvihető,
                             örökbe fogadható kutyusokra. Az országos állatvédő együttgondolkodás az igazi állatmentő segítség!
                             Az adó 1% felajánlás mellett így fontos a kutya örökbefogadás.</p>
                        </div>
                <div id="wrapper" >
                    <div id="first"><h3><b>További kérdésed van? </b></h3>
                        <h4>Itt elérsz minket: +36 20/259-4167</h4></div>
                        <div id="second"><h3><b>Nyitvatartás:</b></h3>
                            <h4>H-P: 8:00-17:00</h4>
                            <h4>Szo-V: 8:00-12:00</h4>
                        </div>
                    </div>
                </div>
    );
};

export default HomePage;