import React from "react";
import "./Showtimes.css";

const Showtimes = () =>{
    return(<>
    <div className="row-showtimes">
        <div className="header">
          <h2>Showtimes and Tickets</h2>
        </div>
        <div className="sub-header">
          <div className="date">
            <input
              className="datepicker"
              type="date"
              name="datepicker"
              id="datepicker"
            />
          </div>
          <div className="location">
            <div className="city">
              <select id="city" name="city">
                <option value="">Select City</option>
                <option value="Kota Bima">Kota Bima</option>
                <option value="Kota Mataram">Kota Mataram</option>
                <option value="Labuan Lombok">Labuan Lombok</option>
                <option value="Lembar">Lembar</option>
                <option value="Mataram">Mataram</option>
                <option value="Pemenang">Pemenang</option>
                <option value="Pototano">Pototano</option>
                <option value="Praya">Praya</option>
                <option value="Senggigi">Senggigi</option>
                <option value="Sumbawa Besar">Sumbawa Besar</option>
              </select>
            </div>
          </div>
        </div>
        <div className="cinema">
          <div className="card-cinema-1">
            <div className="header">
              <div className="logo">
                <img src="ebv.svg" alt="ebv" />
              </div>
              <div className="name">
                <h3>ebv.id</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
          <div className="card-cinema-2">
            <div className="header">
              <div className="logo">
                <img src="cineone21.svg" alt="cineone21" />
              </div>
              <div className="name">
                <h3>CineOne21</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
          <div className="card-cinema-3">
            <div className="header">
              <div className="logo">
                <img src="hiflix.svg" alt="hiflix" />
              </div>
              <div className="name">
                <h3>Hiflix</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
          <div className="card-cinema-4">
            <div className="header">
              <div className="logo">
                <img src="ebv.svg" alt="ebv" />
              </div>
              <div className="name">
                <h3>ebv.id</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
          <div className="card-cinema-5">
            <div className="header">
              <div className="logo">
                <img src="cineone21.svg" alt="cineone21" />
              </div>
              <div className="name">
                <h3>CineOne21</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
          <div className="card-cinema-6">
            <div className="header">
              <div className="logo">
                <img src="hiflix.svg" alt="hiflix" />
              </div>
              <div className="name">
                <h3>Hiflix</h3>
                <p>Whatever Street No. 12. <br />Purwokerto</p>
              </div>
            </div>
            <hr />
            <div className="time-option">
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
              <p>02:00pm</p>
              <p>04:30pm</p>
              <p>07:00pm</p>
              <p>08:30pm</p>
            </div>
            <div className="price">
              <h3>Price</h3>
              <h3>$10.00/seat</h3>
            </div>
            <div className="book">
              <button className="btn-book">Book now</button>
            </div>
          </div>
        </div>
      </div>
    
    </>)
}

export default Showtimes