window.onscroll = function () { myFunction() };

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

document.getElementById("student-info").innerHTML = `<div class="col-md-12 resume">
                                <div class="tabbable resume1" id="tabs-928477">
                                  <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                      <a class="nav-link active show" href="#tab1" data-toggle="tab" style="background-color:#061A40">Resume</a>
                                    </li>
                                    
                                  </ul>
                                  <div class="tab-content">
                                    <div class="tab-pane active" id="panel-231828">
                                    <img src="img/background_result.jpg" width="100%"
                                    height="250">
                                    <div class="profile-img">
                                      <img src="img/profile-photo.webp" width="140" height="140">
                                    </div>  
                                    <div class="centered">
                                      <h3 class="first-title">Kanan Gafarov</h3>
                                      
                                    </div>
                                  </div>
                                    
                                  </div>
                                </div>
                                <div id="card-603561" class="resume2">
                                  <div class="card">
                                    <div class="card-header">
                                      <a class="card-link collapsed" data-toggle="collapse" data-parent="#card-603561" href="#card-element-420134">More information</a>
                                    </div>
                                    <div id="card-element-420134" class="collapse">
                                      <div class="card-body">
                                      <div class="first">
                                        <h3>Skills:</h3>
                                        <ul>
                                          <li>
                                          Exceptional communication and networking skill
                                          </li>
                                          <li>
                                          The ability to work under pressure and multi-task
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="second">
                                        <h3>Education</h3>
                                        <ul>
                                          <li>
                                          Petroleum enginneering
                                          </li>
                                          <li>
                                          Full stack python(tech academy)
                                          </li>
                                        </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                                </div>`