import { io } from "socket.io-client";

export function Home() {

    const socket = io();


    function drawPixel(id, color) {
        console.log("du vill måla ", id, "med färgen ", color);
        let pixel = document.getElementById(id)

        if (pixel.style.backgroundColor === "red") {

            socket.emit("drawing", { position: id, color: "white" });

            return
        }

        socket.emit("drawing", { position: id, color: "red" });
    }


    socket.on("drawing", function (msg) {
        console.log(msg);

        let pixel = document.getElementById(msg.position)

        pixel.style.backgroundColor = msg.color

    })

    socket.on("history", function (history) {
        console.log(history);

        for (let i = 0; i < history.length; i++) {
            const historyPixel = history[i];

            let pixelToDraw = document.getElementById(historyPixel.position)
            pixelToDraw.style.backgroundColor = historyPixel.color;

        }
    })

    // function test(){
    //     console.log("test");
    // }




    return (
        <>
            <div id="gridContainer">
                <div id="1-1" className="pixel">1-1</div>
                <div id="1-2" className="pixel">1-2</div>
                <div id="1-3" className="pixel">1-3</div>
                <div id="1-4" className="pixel">1-4</div>
                <div id="1-5" className="pixel">1-5</div>
                <div id="1-6" className="pixel">1-6</div>
                <div id="1-7" className="pixel">1-7</div>
                <div id="1-8" className="pixel">1-8</div>
                <div id="1-9" className="pixel">1-9</div>
                <div id="1-10" className="pixel">1-10</div>
                <div id="1-11" className="pixel">1-11</div>
                <div id="1-12" className="pixel">1-12</div>
                <div id="1-13" className="pixel">1-13</div>
                <div id="1-14" className="pixel">1-14</div>
                <div id="1-15" className="pixel">1-15</div>


                <div id="2-1" className="pixel">2-1</div>
                <div id="2-2" className="pixel">2-2</div>
                <div id="2-3" className="pixel">2-3</div>
                <div id="2-4" className="pixel">2-4</div>
                <div id="2-5" className="pixel">2-5</div>
                <div id="2-6" className="pixel">2-6</div>
                <div id="2-7" className="pixel">2-7</div>
                <div id="2-8" className="pixel">2-8</div>
                <div id="2-9" className="pixel">2-9</div>
                <div id="2-10" className="pixel">2-10</div>
                <div id="2-11" className="pixel">2-11</div>
                <div id="2-12" className="pixel">2-12</div>
                <div id="2-13" className="pixel">2-13</div>
                <div id="2-14" className="pixel">2-14</div>
                <div id="2-15" className="pixel">2-15</div>

                <div id="3-1" className="pixel">3-1</div>
                <div id="3-2" className="pixel">3-2</div>
                <div id="3-3" className="pixel">3-3</div>
                <div id="3-4" className="pixel">3-4</div>
                <div id="3-5" className="pixel">3-5</div>
                <div id="3-6" className="pixel">3-6</div>
                <div id="3-7" className="pixel">3-7</div>
                <div id="3-8" className="pixel">3-8</div>
                <div id="3-9" className="pixel">3-9</div>
                <div id="3-10" className="pixel">3-10</div>
                <div id="3-11" className="pixel">3-11</div>
                <div id="3-12" className="pixel">3-12</div>
                <div id="3-13" className="pixel">3-13</div>
                <div id="3-14" className="pixel">3-14</div>
                <div id="3-15" className="pixel">3-15</div>

                <div id="4-1" className="pixel">4-1</div>
                <div id="4-2" className="pixel">4-2</div>
                <div id="4-3" className="pixel">4-3</div>
                <div id="4-4" className="pixel">4-4</div>
                <div id="4-5" className="pixel">4-5</div>
                <div id="4-6" className="pixel">4-6</div>
                <div id="4-7" className="pixel">4-7</div>
                <div id="4-8" className="pixel">4-8</div>
                <div id="4-9" className="pixel">4-9</div>
                <div id="4-10" className="pixel">4-10</div>
                <div id="4-11" className="pixel">4-11</div>
                <div id="4-12" className="pixel">4-12</div>
                <div id="4-13" className="pixel">4-13</div>
                <div id="4-14" className="pixel">4-14</div>
                <div id="4-15" className="pixel">4-15</div>

                <div id="5-1" className="pixel">5-1</div>
                <div id="5-2" className="pixel">5-2</div>
                <div id="5-3" className="pixel">5-3</div>
                <div id="5-4" className="pixel">5-4</div>
                <div id="5-5" className="pixel">5-5</div>
                <div id="5-6" className="pixel">5-6</div>
                <div id="5-7" className="pixel">5-7</div>
                <div id="5-8" className="pixel">5-8</div>
                <div id="5-9" className="pixel">5-9</div>
                <div id="5-10" className="pixel">5-10</div>
                <div id="5-11" className="pixel">5-11</div>
                <div id="5-12" className="pixel">5-12</div>
                <div id="5-13" className="pixel">5-13</div>
                <div id="5-14" className="pixel">5-14</div>
                <div id="5-15" className="pixel">5-15</div>

                <div id="6-1" className="pixel">6-1</div>
                <div id="6-2" className="pixel">6-2</div>
                <div id="6-3" className="pixel">6-3</div>
                <div id="6-4" className="pixel">6-4</div>
                <div id="6-5" className="pixel">6-5</div>
                <div id="6-6" className="pixel">6-6</div>
                <div id="6-7" className="pixel">6-7</div>
                <div id="6-8" className="pixel">6-8</div>
                <div id="6-9" className="pixel">6-9</div>
                <div id="6-10" className="pixel">6-10</div>
                <div id="6-11" className="pixel">6-11</div>
                <div id="6-12" className="pixel">6-12</div>
                <div id="6-13" className="pixel">6-13</div>
                <div id="6-14" className="pixel">6-14</div>
                <div id="6-15" className="pixel">6-15</div>


                <div id="7-1" className="pixel">7-1</div>
                <div id="7-2" className="pixel">7-2</div>
                <div id="7-3" className="pixel">7-3</div>
                <div id="7-4" className="pixel">7-4</div>
                <div id="7-5" className="pixel">7-5</div>
                <div id="7-6" className="pixel">7-6</div>
                <div id="7-7" className="pixel">7-7</div>
                <div id="7-8" className="pixel">7-8</div>
                <div id="7-9" className="pixel">7-9</div>
                <div id="7-10" className="pixel">7-10</div>
                <div id="7-11" className="pixel">7-11</div>
                <div id="7-12" className="pixel">7-12</div>
                <div id="7-13" className="pixel">7-13</div>
                <div id="7-14" className="pixel">7-14</div>
                <div id="7-15" className="pixel">7-15</div>

                <div id="8-1" className="pixel">8-1</div>
                <div id="8-2" className="pixel">8-2</div>
                <div id="8-3" className="pixel">8-3</div>
                <div id="8-4" className="pixel">8-4</div>
                <div id="8-5" className="pixel">8-5</div>
                <div id="8-6" className="pixel">8-6</div>
                <div id="8-7" className="pixel">8-7</div>
                <div id="8-8" className="pixel">8-8</div>
                <div id="8-9" className="pixel">8-9</div>
                <div id="8-10" className="pixel">8-10</div>
                <div id="8-11" className="pixel">8-11</div>
                <div id="8-12" className="pixel">8-12</div>
                <div id="8-13" className="pixel">8-13</div>
                <div id="8-14" className="pixel">8-14</div>
                <div id="8-15" className="pixel">8-15</div>

                <div id="9-1" className="pixel">9-1</div>
                <div id="9-2" className="pixel">9-2</div>
                <div id="9-3" className="pixel">9-3</div>
                <div id="9-4" className="pixel">9-4</div>
                <div id="9-5" className="pixel">9-5</div>
                <div id="9-6" className="pixel">9-6</div>
                <div id="9-7" className="pixel">9-7</div>
                <div id="9-8" className="pixel">9-8</div>
                <div id="9-9" className="pixel">9-9</div>
                <div id="9-10" className="pixel">9-10</div>
                <div id="9-11" className="pixel">9-11</div>
                <div id="9-12" className="pixel">9-12</div>
                <div id="9-13" className="pixel">9-13</div>
                <div id="9-14" className="pixel">9-14</div>
                <div id="9-15" className="pixel">9-15</div>

                <div id="10-1" className="pixel">10-1</div>
                <div id="10-2" className="pixel">10-2</div>
                <div id="10-3" className="pixel">10-3</div>
                <div id="10-4" className="pixel">10-4</div>
                <div id="10-5" className="pixel">10-5</div>
                <div id="10-6" className="pixel">10-6</div>
                <div id="10-7" className="pixel">10-7</div>
                <div id="10-8" className="pixel">10-8</div>
                <div id="10-9" className="pixel">10-9</div>
                <div id="10-10" className="pixel">10-10</div>
                <div id="10-11" className="pixel">10-11</div>
                <div id="10-12" className="pixel">10-12</div>
                <div id="10-13" className="pixel">10-13</div>
                <div id="10-14" className="pixel">10-14</div>
                <div id="10-15" className="pixel">10-15</div>

                <div id="11-1" className="pixel">11-1</div>
                <div id="11-2" className="pixel">11-2</div>
                <div id="11-3" className="pixel">11-3</div>
                <div id="11-4" className="pixel">11-4</div>
                <div id="11-5" className="pixel">11-5</div>
                <div id="11-6" className="pixel">11-6</div>
                <div id="11-7" className="pixel">11-7</div>
                <div id="11-8" className="pixel">11-8</div>
                <div id="11-9" className="pixel">11-9</div>
                <div id="11-10" className="pixel">11-10</div>
                <div id="11-11" className="pixel">11-11</div>
                <div id="11-12" className="pixel">11-12</div>
                <div id="11-13" className="pixel">11-13</div>
                <div id="11-14" className="pixel">11-14</div>
                <div id="11-15" className="pixel">11-15</div>


                <div id="12-1" className="pixel">12-1</div>
                <div id="12-2" className="pixel">12-2</div>
                <div id="12-3" className="pixel">12-3</div>
                <div id="12-4" className="pixel">12-4</div>
                <div id="12-5" className="pixel">12-5</div>
                <div id="12-6" className="pixel">12-6</div>
                <div id="12-7" className="pixel">12-7</div>
                <div id="12-8" className="pixel">12-8</div>
                <div id="12-9" className="pixel">12-9</div>
                <div id="12-10" className="pixel">12-10</div>
                <div id="12-11" className="pixel">12-11</div>
                <div id="12-12" className="pixel">12-12</div>
                <div id="12-13" className="pixel">12-13</div>
                <div id="12-14" className="pixel">12-14</div>
                <div id="12-15" className="pixel">12-15</div>


                <div id="13-1" className="pixel">13-1</div>
                <div id="13-2" className="pixel">13-2</div>
                <div id="13-3" className="pixel">13-3</div>
                <div id="13-4" className="pixel">13-4</div>
                <div id="13-5" className="pixel">13-5</div>
                <div id="13-6" className="pixel">13-6</div>
                <div id="13-7" className="pixel">13-7</div>
                <div id="13-8" className="pixel">13-8</div>
                <div id="13-9" className="pixel">13-9</div>
                <div id="13-10" className="pixel">13-10</div>
                <div id="13-11" className="pixel">13-11</div>
                <div id="13-12" className="pixel">13-12</div>
                <div id="13-13" className="pixel">13-13</div>
                <div id="13-14" className="pixel">13-14</div>
                <div id="13-15" className="pixel">13-15</div>


                <div id="14-1" className="pixel">14-1</div>
                <div id="14-2" className="pixel">14-2</div>
                <div id="14-3" className="pixel">14-3</div>
                <div id="14-4" className="pixel">14-4</div>
                <div id="14-5" className="pixel">14-5</div>
                <div id="14-6" className="pixel">14-6</div>
                <div id="14-7" className="pixel">14-7</div>
                <div id="14-8" className="pixel">14-8</div>
                <div id="14-9" className="pixel">14-9</div>
                <div id="14-10" className="pixel">14-10</div>
                <div id="14-11" className="pixel">14-11</div>
                <div id="14-12" className="pixel">14-12</div>
                <div id="14-13" className="pixel">14-13</div>
                <div id="14-14" className="pixel">14-14</div>
                <div id="14-15" className="pixel">14-15</div>


                <div id="15-1" className="pixel">15-1</div>
                <div id="15-2" className="pixel">15-2</div>
                <div id="15-3" className="pixel">15-3</div>
                <div id="15-4" className="pixel">15-4</div>
                <div id="15-5" className="pixel">15-5</div>
                <div id="15-6" className="pixel">15-6</div>
                <div id="15-7" className="pixel">15-7</div>
                <div id="15-8" className="pixel">15-8</div>
                <div id="15-9" className="pixel">15-9</div>
                <div id="15-10" className="pixel">15-10</div>
                <div id="15-11" className="pixel">15-11</div>
                <div id="15-12" className="pixel">15-12</div>
                <div id="15-13" className="pixel">15-13</div>
                <div id="15-14" className="pixel">15-14</div>
                <div id="15-15" className="pixel">15-15</div>
            </div>
        </>
    );
}