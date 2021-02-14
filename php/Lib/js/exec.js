/** @type {Array} */
var _$_790a = ["#empass", "#mailistLength", "\n", "#apilist", "apilist=", "; ", "=", ";", "%cContact: aron.tn.official@gmail.com", "background: black; color: lime; font-size: x-large", "apilist", "process.php", "\r", "#ratio", "Max check is 1000 emails", "%", " Bounce Valid Email Checker | ARON-TN", "title", "api.php?email=", "&mail=", "GET", "display", "block", "#proc-send", "none", "#proc-done", "flex", "#result-container", "Checking <span id=counter>", " / ", "</span> e-mail", 
"#ygdicek", "disabled", "#start-button", "0.5", "110px", "unknown_res", "ser", "true", "<span class=unk_reslt>", "</span>", "<br>", "#effect_switcher", "live", "enable", "lime", "LIVE => ", "live_res", "<span class=live_reslt>", "limited", "orange", "<i class='flag-icon flag-icon-", "'></i>", " [", "] ", "limited_res", "<span class=lim_reslt>", "unknown", "cyan", "LIMITED => ", "invalid", "red", "DIE => ", "invalid_res", "<span class=inv_reslt>", ".live_reslt", ".lim_reslt", ".unk_reslt", ".inv_reslt", 
"#berapaLive", "#berapaLimited", "#berapaUnknown", "#berapaInvalid", "#counter", "Process stopped at: ", " of ", " Please wait until all process finish", "#stop-button", "Total checked: ", " | ", "Live: ", "Invalid: ", "Limited: ", "#log_mess", "1", "Bounce Valid Email Checker | ARON-TN"];
/**
 * @return {undefined}
 */
function getMailistLength() {
  var uHostName = $(_$_790a[0]).val();
  var number = uHostName.split(/\r|\r\n|\n/);
  var n = number.length;
  $(_$_790a[1]).html(n);
}
/**
 * @param {Element} item
 * @return {undefined}
 */
function rememberapi(item) {
  action = item.checked;
  if (action) {
    saveApilist();
  } else {
    deleteApilist();
  }
}
/**
 * @return {undefined}
 */
function saveApilist() {
  var c_value = $(_$_790a[3]).val().split(_$_790a[2]);
  document.cookie = _$_790a[4] + c_value;
}
/**
 * @return {undefined}
 */
function deleteApilist() {
  document.cookie = _$_790a[4];
}
/**
 * @param {?} name
 * @return {?}
 */
function getCookie(name) {
  var uHostName = _$_790a[5] + document.cookie;
  var braceStack = uHostName.split(_$_790a[5] + name + _$_790a[6]);
  if (braceStack.length == 2) {
    return braceStack.pop().split(_$_790a[7]).shift();
  }
}
$(function() {
  console.log(_$_790a[8], _$_790a[9]);
  setTimeout(function() {
    getApilistLength();
  }, 1E3);
  var sid = getCookie(_$_790a[10]);
  if (sid === undefined) {
    $(_$_790a[3]).val(window.location.href + _$_790a[11]);
    document.cookie = _$_790a[4];
  } else {
    asu = sid.replace(/,/g, _$_790a[12]);
    $(_$_790a[3]).val(asu);
  }
  $(_$_790a[33]).click(function(dataAndEvents) {
    /**
     * @return {undefined}
     */
    function init() {
      /** @type {number} */
      perc = i / mail.length;
      /** @type {number} */
      perc = Math.ceil(perc * 100);
      $(_$_790a[17]).html(perc + _$_790a[15] + _$_790a[16]);
      index = i;
      val = mail[i];
      myUrl = _$_790a[18] + val;
      setTimeout(function() {
        $.ajax({
          type : _$_790a[20],
          email : val,
          url : myUrl,
          async : true,
          /**
           * @param {?} xhr
           * @return {undefined}
           */
          beforeSend : function(xhr) {
            $(_$_790a[23]).css(_$_790a[21], _$_790a[22]);
            $(_$_790a[25]).css(_$_790a[21], _$_790a[24]);
            $(_$_790a[27]).css({
              display : _$_790a[26]
            });
            $(_$_790a[31]).html(_$_790a[28] + sp + _$_790a[29] + mail.length + _$_790a[30]);
            $(_$_790a[3]).attr(_$_790a[32], true);
            $(_$_790a[0]).attr(_$_790a[32], true);
            $(_$_790a[33]).attr(_$_790a[32], true);
            $(_$_790a[3]).css({
              opacity : _$_790a[34],
              height : _$_790a[35]
            });
            $(_$_790a[0]).css({
              opacity : _$_790a[34]
            });
          },
          /**
           * @param {?} textStatus
           * @return {undefined}
           */
          success : function(textStatus) {
          },
          /**
           * @param {?} textStatus
           * @return {undefined}
           */
          error : function(textStatus) {
            /** @type {(HTMLElement|null)} */
            var msgElm = document.getElementById(_$_790a[36]);
            if (document.getElementById(_$_790a[37]).checked) {
              rate_value = document.getElementById(_$_790a[37]).value;
              if (rate_value == _$_790a[38]) {
                msgElm.innerHTML = msgElm.innerHTML + _$_790a[39] + val + _$_790a[40] + _$_790a[41];
              } else {
                msgElm.innerHTML = msgElm.innerHTML + _$_790a[39] + val + _$_790a[40] + _$_790a[41];
              }
            }
          },
          /**
           * @param {string} xhr
           * @return {undefined}
           */
          complete : function(xhr) {
            var response = xhr.responseJSON;
            console.log(response);
            isEf = $(_$_790a[42]).val();
            if (response.status == _$_790a[43]) {
              if (isEf == _$_790a[44]) {
                $(_$_790a[27]).css({
                  background : _$_790a[45]
                });
              }
              var s = _$_790a[46] + response.email;
              /** @type {(HTMLElement|null)} */
              var msgElm = document.getElementById(_$_790a[47]);
              msgElm.innerHTML = msgElm.innerHTML + _$_790a[48] + s + _$_790a[40] + _$_790a[41];
            } else {
              if (response.status == _$_790a[49]) {
                if (isEf == _$_790a[44]) {
                  $(_$_790a[27]).css({
                    background : _$_790a[50]
                  });
                }
                var rmeth = response.country_code;
                rmeth = rmeth.toLowerCase();
                var country = _$_790a[51] + rmeth + _$_790a[52];
                s = country + _$_790a[53] + response.country + _$_790a[54] + response.email;
                /** @type {(HTMLElement|null)} */
                msgElm = document.getElementById(_$_790a[55]);
                msgElm.innerHTML = msgElm.innerHTML + _$_790a[56] + s + _$_790a[40] + _$_790a[41];
              } else {
                if (response.status == _$_790a[57]) {
                  if (isEf == _$_790a[44]) {
                    $(_$_790a[27]).css({
                      background : _$_790a[58]
                    });
                  }
                  s = _$_790a[59] + response.email;
                  /** @type {(HTMLElement|null)} */
                  msgElm = document.getElementById(_$_790a[36]);
                  msgElm.innerHTML = msgElm.innerHTML + _$_790a[39] + s + _$_790a[40] + _$_790a[41];
                } else {
                  if (response.status == _$_790a[60]) {
                    if (isEf == _$_790a[44]) {
                      $(_$_790a[27]).css({
                        background : _$_790a[61]
                      });
                    }
                    s = _$_790a[62] + response.email;
                    /** @type {(HTMLElement|null)} */
                    msgElm = document.getElementById(_$_790a[63]);
                    msgElm.innerHTML = msgElm.innerHTML + _$_790a[64] + s + _$_790a[40] + _$_790a[41];
                  }
                }
              }
            }
            setTimeout(function() {
              $(_$_790a[27]).css({
                background : _$_790a[24]
              });
              clearTimeout();
            }, 300);
            var nData = $(_$_790a[65]).length;
            var r = $(_$_790a[66]).length;
            var firstLength = $(_$_790a[67]).length;
            var spaces = $(_$_790a[68]).length;
            $(_$_790a[69]).html(nData);
            $(_$_790a[70]).html(r);
            $(_$_790a[71]).html(firstLength);
            $(_$_790a[72]).html(spaces);
            $(_$_790a[73]).html(sp + _$_790a[29] + mail.length);
          }
        });
        i++;
        sp++;
        $(_$_790a[77]).click(function() {
          /** @type {number} */
          i = mail.length++;
          alert(_$_790a[74] + sp + _$_790a[75] + mail[sp] + _$_790a[76]);
          exit;
        });
        if (i < mail.length) {
          init();
        }
      }, ratio);
    }
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var sp = 0;
    ratio = $(_$_790a[13]).val();
    vaa = $(_$_790a[0]).val();
    vaa = vaa.split(_$_790a[2]);
    /** @type {Array} */
    var elems = new Array;
    $(vaa).each(function(dataAndEvents, elem) {
      if ($.inArray(elem, elems) == -1) {
        elems.push(elem);
      }
    });
    /** @type {Array} */
    mail = elems;
    if (mail.length > 9999999) {
      alert(_$_790a[14]);
      return false;
    }
    $(document).ajaxStop(function() {
      $(_$_790a[23]).css(_$_790a[21], _$_790a[24]);
      vaa = $(_$_790a[0]).val();
      vaa = vaa.split(_$_790a[2]);
      var cnl = $(_$_790a[65]).length;
      var nTokens = $(_$_790a[66]).length;
      var spaces = $(_$_790a[67]).length;
      var valuesLen = $(_$_790a[68]).length;
      var fmt = _$_790a[78] + vaa.length + _$_790a[79] + _$_790a[80] + cnl + _$_790a[79] + _$_790a[81] + valuesLen + _$_790a[79] + _$_790a[82] + spaces;
      console.log(fmt);
      $(_$_790a[25]).css(_$_790a[21], _$_790a[22]);
      $(_$_790a[83]).html(fmt);
      $(_$_790a[3]).css({
        opacity : _$_790a[84],
        height : _$_790a[35]
      });
      $(_$_790a[0]).css({
        opacity : _$_790a[84]
      });
      $(_$_790a[3]).attr(_$_790a[32], false);
      $(_$_790a[0]).attr(_$_790a[32], false);
      $(_$_790a[33]).attr(_$_790a[32], false);
      $(_$_790a[17]).html(_$_790a[85]);
    });
    init();
  });
});
