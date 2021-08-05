var $table=$("#table-weapons tbody");async function loadWeaponListing(){$(".btn-refresh").prop("disabled",!0),$.get("/listing/weapons",async t=>{$table.html(""),t.length>0?$table.append(await Promise.all(t.map(async t=>{const e=weaponFromContract(t,await getWeaponData(t)),a=await getFinalPrice(weapAddress,t);if(parseFloat(a)>0){let n="",r="";for(let t=0;t<=e.stars;t++)n+='<img class="me-1" src="/img/star.svg" alt="Star" width="20">';return e.stat1Value>0&&(r+=`<img class="me-1" src="/img/${traitToIcon(e.stat1Type)}" width="20">${e.stat1} +${e.stat1Value}`),e.stat2Value>0&&(r+=`<br><img class="me-1" src="/img/${traitToIcon(e.stat2Type)}" width="20">${e.stat2} +${e.stat2Value}`),e.stat3Value>0&&(r+=`<br><img class="me-1" src="/img/${traitToIcon(e.stat3Type)}" width="20">${e.stat3} +${e.stat3Value}`),e.bonusPower>0&&(r+=`<br>BONUS +${e.bonusPower}`),`\n                        <tr>\n                            <td class="align-middle text-white">${t}</td>\n                            <td class="align-middle text-white">\n                                <div class="d-flex align-items-center">\n                                    <img class="me-2" src="/img/${elementToIcon(e.trait)}" alt="${e.element}" width="20">\n                                </div>\n                            </td>\n                            <td class="align-middle text-white">\n                                ${n}\n                            </td>\n                            <td class="align-middle text-white">\n                                ${r}\n                            </td>\n                            <td class="align-middle text-white">${parseFloat(fromEther(a)).toFixed(2)} SKILL</td>\n                        </tr>`}}))):$table.append('<tr><td class="text-center text-white" colspan="5">No weapon listed</td></tr>'),$(".btn-refresh").removeAttr("disabled")})}async function refresh(){await loadWeaponListing()}function elementToIcon(t){switch(t){case WeaponElement.Fire:return"fire.png";case WeaponElement.Earth:return"earth.png";case WeaponElement.Water:return"water.png";case WeaponElement.Lightning:return"lightning.png";default:return"???"}}function traitToIcon(t){switch(t){case WeaponTrait.STR:return"fire.png";case WeaponTrait.DEX:return"earth.png";case WeaponTrait.INT:return"water.png";case WeaponTrait.CHA:return"lightning.png";case WeaponTrait.PWR:return"pwr.svg";default:return"???"}}loadWeaponListing();