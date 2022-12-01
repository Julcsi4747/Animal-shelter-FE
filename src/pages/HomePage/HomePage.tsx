import React from "react";
import "../HomePage/HomePage.scss";

const HomePage = () => {
    return (
        <div>
            <div id="div1" className="d-flex flex-column">
                <h1 style={{marginTop: 20}}><b>Tappancs Állatmenhely</b></h1>
                    <h2>100% hűség</h2>
            </div>
                    <div id="div2"  className="card my-4  p-4 bg-white shadow text-center">
                        <h4><b>Köszöntjük a Tappancs Állatmenhely dolgozói és lakói nevében honlapunkon.</b></h4>
                        <p id="p1" style={{marginTop: 50}}>Menhelyünk több éve ad testi-lelki ápolást és otthont a rászoruló állatoknak, valamint segít nekik gazdához és boldog élethez jutni. A feltétel nélküli és önzetlen állatszeretet motivál minket a munkánk során. Egyesületünk több száz árva, kidobott, rossz körülmények közül mentett kutyának nyújt otthont és biztonságot, amíg újra szerető gazdára nem lelnek.
                            Kutyáink oltva, féregtelenítve és bolhátlanítva várják újdonsült gazdijukat. Az örökbefogadás előre elküldött bemutatkozó levél alapján történik, amennyiben minket meggyőz levelével akár már másnap haza is viheti kis házikedvencét.
                            Állatmenhelyünkön van lehetőség örökbefogadásra és a kutyusok sétáltatására is. Ezeket előre a honlapon történő jelentkezés, egyeztetés után lehet megtenni. Kutyát sétáltatni a nyitvatartási időben lehetséges, ehhez minden szükséges felszerelést biztosítunk.
                        </p>
                        <h5 style={{marginTop: 80}}><b>Adó 1+1 állatvédelemre</b></h5>
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
                        <h4>Itt elérsz minket: +36 20/259-4167</h4>
                        <h4>tappancsallatmenhely@gmail.com</h4>
                    </div>
                        <div id="second"><h3><b>Nyitvatartás:</b></h3>
                            <h4>Hétfő - Péntek: 14:00 - 19:00</h4>
                            <h4>Szombat - Vasárnap: 9:00 - 12:00</h4>
                            <h4>Ünnepnapokon zárva</h4>
                        </div>
                    </div>
                </div>
    );
};

export default HomePage;