<!-- Credit for the original by Keith Johnson https://www.starshipsandsteel.com/2020/12/conan-2d20-on-roll20-custom-sheets.html  May 9, 2021-->
<!-- Adapted by Murray Writtle https://www.facebook.com/campobianco/ Starting Dec 2021 -->

<!-- Sheet Tab Buttons -->
<div>
    <button type="action" name="act_PC">PC</button>
    <button type="action" name="act_PCdetail">PC-Detail</button>
    <button type="action" name="act_NPC">NPC</button>
    <button type="action" name="act_GM">GM Panel</button>
</div>

<!-- Sheet Tabs -->

<input type="hidden" class="sheet-tabstoggle" name="attr_sheetTab" value="PC">
<input type="hidden" name="attr_initialized" value=0>

<div class="sheet-PC">
    <div class="charactername">
        <input class="charname_label" name="attr_character_name">
    </div>

	<div class="weaponpanel">
        <span class="conanheader">Weapons</span> 
        <input name="attr_loadbonus" type="hidden" value=0>
		<fieldset class="repeating_weapons">
            <input type="text" class="weaponheader" value="Weapon Name" name="attr_WeaName">
			<select name="attr_wea-class" class="width5" readonly>
				<option value="@{melee_bonus}" title="Melee">Melee</option>
				<option value="@{ranged_bonus}">Ranged</option>
				<option value="@{threat_bonus}">Threaten</option>
            </select>
            Hand <select name="attr_wea-handed" class="attribtext">
                <option value="1">1H</option>
                <option value="2">2H</option>
                <option value="U">Unbalanced</option>
                <option value="N">N/A</option>              
            </select>
            Rch/Rng <input type="text" class="width5" value="reach" name="attr_reach" title="Reach" value="1">
            Dmg <input type="number" class="die-value" value="1" name="attr_CD" title="Damage dice">
            <button type="roll" class="blankroll" title="Damage roll" value="!rollcd=@{character_id}=@{WeaName}=@{cd}=@{wea-class}=?{extra dice|0}=@{loadbonus}=@{effects}"><img src="https://i.imgur.com/V0qkLWo.png" width="20"></button>
            <input type="text" value="effects" name="attr_effects" class="width10">
            Loads 
            <!--<input type="checkbox" name="attr_load1" value="1"><input type="checkbox" name="attr_load2" value="1"><input type="checkbox" name="attr_load3" value="1"><input type="checkbox" name="attr_load4"value="1">-->
            <input type="number" title="total loads" name="attr_totalloads" value="1">
            <button type="action" name="act_load"><img src="https://i.imgur.com/T5wqenY.png" width="15" title="Use a Load to add d20 and 1cd to current roll."></button>
          <BR>
        </fieldset>
        Current loads<input type="text" name="attr_loadbonus" value=0 class="width5" readonly><button type="roll" class="blankroll" title="clear load variable." value="!clearloads @{character_id}">Clear Loads</button>

        <!--<input type="hidden" name="attr_loadbonus" value=0>-->
    </div>
    <div class="newskillspanel">
            <!--Setting up dice pool variables-->
            <input type="hidden" name="attr_d20momentum" class="die-value" readonly value=0 title="Dice from momentum">
            <input type="hidden" name="attr_spentmom" value=0>
            <input type="hidden" name="attr_d20doom" class="die-value" readonly value=0 title="Dice from doom">
            <input type="hidden" name="attr_d20fortune" class="die-value" readonly value=0 title="Dice from fortune">
            <input type="hidden" name="attr_d20exception" class="die-value" readonly value=0 title="Dice from talents/loads/equipment">
            <!-- Skill Table -->
            <br>
            <table border = 3>
                <tr>
                    <TR>
                        <td><span class="skilllabel">Skill Name (attribute)</span></td><td><span class="skilllabel">Exp</span></td><td><span class="skilllabel">TN</span></td><td><span class="skilllabel">FC</span></td><td><span class="skilllabel">Die Pool</span></td><td><span class="skilllabel">Roll Dice!</span></td>
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Moving quickly through difficult terrain. Jumping. Avoiding falling damage. Dodging Ranged attacks.">Acrobatics (Agility)</span></td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Acrobatics_exp" type="number" value=0></Td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Acrobatics_TN" type="number" value="@{Acrobatics_exp}+@{agility}" disabled></Td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Acrobatics_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
<!--                        <td><button type="action" name="act_acrobatics"><img src="https://i.imgur.com/oD5mOAy.png" width="20" title="Select Skill"></button></td>-->
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{acrobatics_TN} @{acrobatics_focus} Acrobatics ?{Difficulty?|1}" title="Acrobatics"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> 
                        </td>
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Performing experiments and constructing petty enchantments. Understanding alchemical language and methods. Analyzing chemicals, plants, and metals.">Alchemy (Intelligence)</span></Td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Alchemy_exp" type="number" value=0></Td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Alchemy_TN" type="number" value="@{Alchemy_exp}+@{intelligence}" disabled></Td>
                        <td class="skillvaluecell"><input class="attributelabel-5" name="attr_Alchemy_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                     <!--   <td><button type="action" name="act_alchemy"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>-->
                        <td><button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Alchemy_TN} @{Alchemy_focus} Alchemy ?{Difficulty?|1}" title="Alchemy"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>

                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Calming wild animals. Training and caring for domestic animals. Riding beasts of burden. Identifying different animals.">Animal Handling (Persuade)</span></Td>
                        <td><input class="attributelabel" name="attr_animal_handling_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_animal_handling_TN" type="number" value="@{Animal_Handling_exp}+@{personality}" disabled></Td>
                        <td><input class="attributelabel" name="attr_animal_handling_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Animal_handling_TN} @{Animal_handling_focus} Animal_Handling ?{Difficulty?|1}" title="Animal Handling"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Moving forcefully through difficult terrain. Climbing. Swimming. Exerting physical strength.">Athletics (Brawn)</span></Td>
                        <td><input class="attributelabel" name="attr_athletics_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_athletics_TN" type="number" value="@{Athletics_exp}+@{brawn}" disabled></Td>
                        <td><input class="attributelabel" name="attr_athletics_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Athletics_TN} @{Athletics_focus} Athletics ?{Difficulty?|1}" title="Athletics"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Issuing orders to subordinates. Coercion through force of will. Coordinating allies.">Command (Persuade)</span></Td>
                        <td><input class="attributelabel" name="attr_command_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_command_TN" type="number" value="@{Command_exp}+@{personality}" disabled></Td>
                        <td><input class="attributelabel" name="attr_command_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Command_TN} @{Command_focus} Command ?{Difficulty?|1}" title="Command"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Treating lost Resolve and Trauma.">Counsel (Persuade)</span></Td>
                        <td><input class="attributelabel" name="attr_counsel_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_counsel_TN" type="number" value="@{Counsel_exp}+@{personality}" disabled></Td>
                        <td><input class="attributelabel" name="attr_counsel_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Counsel_TN} @{Counsel_focus} Counsel ?{Difficulty?|1}" title="Counsel"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Creating, maintaining, and repairing structures, tools, and devices. Knowledge of armorsmithing, blacksmithing, leatherworking, carpentry, masonry, bowmaking, weaponcrafting, and various fields of engineering.">Craft (Intelligence)</span></Td>
                        <td><input class="attributelabel" name="attr_craft_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_craft_TN" type="number" value="@{craft_exp}+@{intelligence}" disabled></Td>
                        <td><input class="attributelabel" name="attr_craft_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Craft_TN} @{Craft_focus} Craft ?{Difficulty?|1}" title="Craft"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Resisting shock in battle. Resisting coercion or persuasion. Maintaining concentration. Recovering from lost Resolve and Trauma.">Discipline (Willpower)</span></Td>
                        <td><input class="attributelabel" name="attr_discipline_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_discipline_TN" type="number" value="@{Discipline_exp}+@{willpower}" disabled></Td>
                        <td><input class="attributelabel" name="attr_discipline_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Discipline_TN} @{Discipline_focus} Discipline ?{Difficulty?|1}" title="Discipline"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Treating physical damage and Injuries. Diagnosing and treating disease and poison. Determining cause of death.">Healing (Intelligence)</span></Td>
                        <td><input class="attributelabel" name="attr_healing_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_healing_TN" type="number" value="@{Healing_exp}+@{intelligence}" disabled></Td>
                        <td><input class="attributelabel" name="attr_healing_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Healing_TN} @{Healing_focus} Healing ?{Difficulty?|1}" title="Healing"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Inspecting people, places, and information closely. Recognizing patterns. Discerning if someone is lying. Recognizing the presence of the unnatural or supernatural.">Insight (Awarness)</span></Td>
                        <td><input class="attributelabel" name="attr_insight_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_insight_TN" type="number" value="@{Insight_exp}+@{awareness}" disabled></Td>
                        <td><input class="attributelabel" name="attr_insight_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Insight_TN} @{Insight_focus} Insight ?{Difficulty?|1}" title="Insight"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>   
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Speaking additional languages. Literacy. Recognizing languages and accents. Deciphering ancient languages or codes. Translating documents or conversations.">Linguistics (Intelligence)</span></Td>
                        <td><input class="attributelabel" name="attr_linguistics_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_linguistics_TN" type="number" value="@{Linguistics_exp}+@{intelligence}" disabled></Td>
                        <td><input class="attributelabel" name="attr_linguistics_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Linguistics_TN} @{Linguistics_focus} Linguistics ?{Difficulty?|1}" title="Linguistics"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>          
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Basic knowledge useful for day-to-day life. Knowledge of history and current events. Ability to research historical events through sources such as The Book of Skelos.">Lore (Intelligence)</span></Td>
                        <td><input class="attributelabel" name="attr_lore_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_lore_TN" type="number" value="@{Lore_exp}+@{intelligence}" disabled></Td>
                        <td><input class="attributelabel" name="attr_lore_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Lore_TN} @{Lore_focus} Lore ?{Difficulty?|1}" title="Lore"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>  
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Making Melee attacks. Identifying melee weapons and their Qualities, and caring for them.">Melee (Agility)</span></Td>
                        <td><input class="attributelabel" name="attr_melee_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_melee_TN" type="number" value="@{Melee_exp}+@{agility}" disabled></Td>
                        <td><input class="attributelabel" name="attr_melee_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Melee_TN} @{Melee_focus} Melee ?{Difficulty?|1}" title="Melee"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>  
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Finding hidden things. Noticing things that are unusual or simply out of the ordinary.">Observation (Awarness)</span></Td>
                        <td><input class="attributelabel" name="attr_observation_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_observation_TN" type="number" value="@{observation_exp}+@{awareness}" disabled></Td>
                        <td><input class="attributelabel" name="attr_observation_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Observation_TN} @{Observation_focus} Observation ?{Difficulty?|1}" title="Observation"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td>  
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Blocking Melee attacks. Identifying combat styles."> Parry (Coordination)</span></Td>
                        <td><input class="attributelabel" name="attr_parry_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_parry_TN" type="number" value="@{parry_exp}+@{coordination}" disabled></Td>
                        <td><input class="attributelabel" name="attr_parry_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Parry_TN} @{Parry_focus} Parry ?{Difficulty?|1}" title="Parry"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Convincing others to do as you wish, by charm or by intimidation.">Persuade (Personality)</span></Td>
                        <td><input class="attributelabel" name="attr_persuade_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_persuade_TN" type="number" value="@{persuade_exp}+@{personality}" disabled></Td>
                        <td><input class="attributelabel" name="attr_persuade_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Persuade_TN} @{Persuade_focus} Persuade ?{Difficulty?|1}" title="Persuade"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Making Ranged attacks. Identifying ranged weaponry. Maintaining ranged weaponry.">Ranged (Coordination)</span></Td>
                        <td><input class="attributelabel" name="attr_ranged_Weapons_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_ranged_Weapons_TN" type="number" value="@{Ranged_Weapons_exp}+@{coordination}" disabled></Td>
                        <td><input class="attributelabel" name="attr_ranged_Weapons_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Ranged_Weapons_TN} @{Ranged_Weapons_focus} Ranged_Weapons ?{Difficulty?|1}" title="Ranged_Weapons"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Recovering naturally from loss to Vigor and Trauma. Resisting the effects of poison, disease, and environmental effects.">Resistance (Brawn)</span></Td>
                        <td><input class="attributelabel" name="attr_resistance_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_resistance_TN" type="number" value="@{Resistance_exp}+@{brawn}" disabled></Td>
                        <td><input class="attributelabel" name="attr_resistance_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Resistance_TN} @{Resistance_focus} Resistance ?{Difficulty?|1}" title="Resistance"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Operating and Identifying boats from the River Styx, the Western Ocean, to the Vilayet Sea.">Sailing (Coordination)</span></Td>
                        <td><input class="attributelabel" name="attr_sailing_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_sailing_TN" type="number" value="@{Sailing_exp}+@{coordination}" disabled></Td>
                        <td><input class="attributelabel" name="attr_sailing_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Sailing_TN} @{Sailing_focus} Sailing ?{Difficulty?|1}" title="Sailing"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Knowledge of economics across the Hyborian kingdoms. Skill at buying and selling items and finding a good deal. Dealing with merchant contracts on the Road of Kings.">Society (Persuade)</span></Td>
                        <td><input class="attributelabel" name="attr_society_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_society_TN" type="number" value="@{Society_exp}+@{personality}" disabled></Td>
                        <td><input class="attributelabel" name="attr_society_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Society_TN} @{Society_focus} Society ?{Difficulty?|1}" title="Society"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Recognizing sorcery in action or from its effects. Knowledge of sorcerers and their doings. Casting spells. Identifying the presence of the unnatural.">Sorcery (Willpower)</span></Td>
                        <td><input class="attributelabel" name="attr_sorcery_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_sorcery_TN" type="number" value="@{Sorcery_exp}+@{willpower}" disabled></Td>
                        <td><input class="attributelabel" name="attr_sorcery_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Sorcery_TN} @{Sorcery_focus} Sorcery ?{Difficulty?|1}" title="Sorcery"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Moving quietly. Hiding quickly. Hiding objects on one’s person. Disguising oneself.">Stealth (Agility)</span></Td>
                        <td><input class="attributelabel" name="attr_stealth_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_stealth_TN" type="number" value="@{Stealth_exp}+@{agility}" disabled></Td>
                        <td><input class="attributelabel" name="attr_stealth_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Stealth_TN} @{Stealth_focus} Stealth ?{Difficulty?|1}" title="Stealth"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Navigating an unfamiliar environment. Finding shelter. Avoiding environmental hazards. Tracking others.">Survival (Awarness)</span></Td>
                        <td><input class="attributelabel" name="attr_survival_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_survival_TN" type="number" value="@{Survival_exp}+@{Awareness}" disabled></Td>
                        <td><input class="attributelabel" name="attr_survival_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Survival_TN} @{Survival_focus} Survival ?{Difficulty?|1}" title="Survival"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR  class="skillrow">
                        <Td><span class="skilllabel" title="Picking locks or disarming traps. Sleight of hand. Identifying strengths and weaknesses in security measures. Understanding crime and criminal activity. Interacting with criminals.">Thievery (Awarness)</span></Td>
                        <td><input class="attributelabel" name="attr_thievery_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_thievery_TN" type="number" value="@{Thievery_exp}+@{Awareness}" disabled></Td>
                        <td><input class="attributelabel" name="attr_thievery_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Thievery_TN} @{Thievery_focus} Thievery ?{Difficulty?|1}" title="Thievery"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                    <TR class="skillrow">
                        <Td><span class="skilllabel" title="Mass combat tactics, logistics, and strategies. Operating and maintaining siege weapons. Commanding groups in combat. Battlefield reconnaissance.">Warfare (Intelligence)</span></Td>
                        <td><input class="attributelabel" name="attr_warfare_exp" type="number" value=0></Td>
                        <td><input class="attributelabel" name="attr_warfare_TN" type="number" value="@{Warfare_exp}+@{intelligence}" disabled></Td>
                        <td><input class="attributelabel" name="attr_warfare_focus" type="number" value=0></Td>
                        <td>
                            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
                            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="20"></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="20" ></button>
                            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
                            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="20"></button>
                            <button type="action" name="act_cleardice" title="Reset dice and load selections.">Reset Dice</button>
                            <span class="dielabel">2d20 +</span><input type="number" class="attributelabel" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
                        </td>
                        <td>
                            <button type="roll" class="blankroll" name="skill_check" value="!skillrow @{character_id} 2 @{Warfare_TN} @{Warfare_focus} Warfare ?{Difficulty?|1}" title="Warfare"><img src="https://i.imgur.com/YuDxEpz.png" width="30"></button> </td>
                        </td> 
                    </TR>
                </tr>
            </table>
    </div>
    <!--<div class="skillspanel">
        <span class="conanheader">Skills</span>
        <table class="skillstable">
            <TR>
                <td><span class="skilllabel">Name (attribute)</span></td><td><span class="skilllabel">EXP</span></td><td><span class="skilllabel">TN</span></td><td><span class="skilllabel">FC</span></td><td><span class="skilllabel">Send to<br>2d20 Roller</span></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Moving quickly through difficult terrain. Jumping. Avoiding falling damage. Dodging Ranged attacks.">Acrobatics (Agility)</span></td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Acrobatics_exp" type="number" value=0></Td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Acrobatics_TN" type="number" value="@{Acrobatics_exp}+@{agility}" disabled></Td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Acrobatics_focus" type="number" value=0></Td>
                <td><button type="action" name="act_acrobatics"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Performing experiments and constructing petty enchantments. Understanding alchemical language and methods. Analyzing chemicals, plants, and metals.">Alchemy (Intelligence)</span></Td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Alchemy_exp" type="number" value=0></Td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Alchemy_TN" type="number" value="@{Alchemy_exp}+@{intelligence}" disabled></Td>
                <td class="skillvaluecell"><input class="attributelabel" name="attr_Alchemy_focus" type="number" value=0></Td>
                <td><button type="action" name="act_alchemy"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Calming wild animals. Training and caring for domestic animals. Riding beasts of burden. Identifying different animals.">Animal Handling (Persuade)</span></Td>
                <td><input class="attributelabel" name="attr_animal_handling_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_animal_handling_TN" type="number" value="@{Animal_Handling_exp}+@{personality}" disabled></Td>
                <td><input class="attributelabel" name="attr_animal_handling_focus" type="number" value=0></Td>
                <td><button type="action" name="act_animal_Handling"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Moving forcefully through difficult terrain. Climbing. Swimming. Exerting physical strength.">Athletics (Brawn)</span></Td>
                <td><input class="attributelabel" name="attr_athletics_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_athletics_TN" type="number" value="@{Athletics_exp}+@{brawn}" disabled></Td>
                <td><input class="attributelabel" name="attr_athletics_focus" type="number" value=0></Td>
				<td><button type="action" name="act_athletics"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></p></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Issuing orders to subordinates. Coercion through force of will. Coordinating allies.">Command (Persuade)</span></Td>
				<td><input class="attributelabel" name="attr_command_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_command_TN" type="number" value="@{Command_exp}+@{personality}" disabled></Td>
                <td><input class="attributelabel" name="attr_command_focus" type="number" value=0></Td>
				<td><button type="action" name="act_command"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Treating lost Resolve and Trauma.">Counsel (Persuade)</span></Td>
				<td><input class="attributelabel" name="attr_counsel_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_counsel_TN" type="number" value="@{Counsel_exp}+@{personality}" disabled></Td>
                <td><input class="attributelabel" name="attr_counsel_focus" type="number" value=0></Td>
				<td><button type="action" name="act_counsel"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Creating, maintaining, and repairing structures, tools, and devices. Knowledge of armorsmithing, blacksmithing, leatherworking, carpentry, masonry, bowmaking, weaponcrafting, and various fields of engineering.">Craft (Intelligence)</span></Td>
				<td><input class="attributelabel" name="attr_craft_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_craft_TN" type="number" value="@{craft_exp}+@{intelligence}" disabled></Td>
                <td><input class="attributelabel" name="attr_craft_focus" type="number" value=0></Td>
				<td><button type="action" name="act_craft"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Resisting shock in battle. Resisting coercion or persuasion. Maintaining concentration. Recovering from lost Resolve and Trauma.">Discipline (Willpower)</span></Td>
				<td><input class="attributelabel" name="attr_discipline_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_discipline_TN" type="number" value="@{Discipline_exp}+@{willpower}" disabled></Td>
                <td><input class="attributelabel" name="attr_discipline_focus" type="number" value=0></Td>
				<td><button type="action" name="act_discipline"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Treating physical damage and Injuries. Diagnosing and treating disease and poison. Determining cause of death.">Healing (Intelligence)</span></Td>
				<td><input class="attributelabel" name="attr_healing_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_healing_TN" type="number" value="@{Healing_exp}+@{intelligence}" disabled></Td>
                <td><input class="attributelabel" name="attr_healing_focus" type="number" value=0></Td>
				<td><button type="action" name="act_healing"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>				
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Inspecting people, places, and information closely. Recognizing patterns. Discerning if someone is lying. Recognizing the presence of the unnatural or supernatural.">Insight (Awarness)</span></Td>
				<td><input class="attributelabel" name="attr_insight_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_insight_TN" type="number" value="@{Insight_exp}+@{awareness}" disabled></Td>
                <td><input class="attributelabel" name="attr_insight_focus" type="number" value=0></Td>
				<td><button type="action" name="act_insight"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Speaking additional languages. Literacy. Recognizing languages and accents. Deciphering ancient languages or codes. Translating documents or conversations.">Linguistics (Intelligence)</span></Td>
				<td><input class="attributelabel" name="attr_linguistics_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_linguistics_TN" type="number" value="@{Linguistics_exp}+@{intelligence}" disabled></Td>
                <td><input class="attributelabel" name="attr_linguistics_focus" type="number" value=0></Td>
				<td><button type="action" name="act_linguistics"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Basic knowledge useful for day-to-day life. Knowledge of history and current events. Ability to research historical events through sources such as The Book of Skelos.">Lore (Intelligence)</span></Td>
				<td><input class="attributelabel" name="attr_lore_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_lore_TN" type="number" value="@{Lore_exp}+@{intelligence}" disabled></Td>
                <td><input class="attributelabel" name="attr_lore_focus" type="number" value=0></Td>
				<td><button type="action" name="act_lore"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Making Melee attacks. Identifying melee weapons and their Qualities, and caring for them.">Melee (Agility)</span></Td>
				<td><input class="attributelabel" name="attr_melee_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_melee_TN" type="number" value="@{Melee_exp}+@{agility}" disabled></Td>
                <td><input class="attributelabel" name="attr_melee_focus" type="number" value=0></Td>
				<td><button type="action" name="act_melee"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Finding hidden things. Noticing things that are unusual or simply out of the ordinary.">Observation (Awarness)</span></Td>
				<td><input class="attributelabel" name="attr_observation_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_observation_TN" type="number" value="@{observation_exp}+@{awareness}" disabled></Td>
                <td><input class="attributelabel" name="attr_observation_focus" type="number" value=0></Td>
				<td><button type="action" name="act_observation"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Blocking Melee attacks. Identifying combat styles."> Parry (Coordination)</span></Td>
				<td><input class="attributelabel" name="attr_parry_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_parry_TN" type="number" value="@{parry_exp}+@{coordination}" disabled></Td>
                <td><input class="attributelabel" name="attr_parry_focus" type="number" value=0></Td>
				<td><button type="action" name="act_parry"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Convincing others to do as you wish, by charm or by intimidation.">Persuade (Persuade)</span></Td>
				<td><input class="attributelabel" name="attr_persuade_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_persuade_TN" type="number" value="@{persuade_exp}+@{personality}" disabled></Td>
                <td><input class="attributelabel" name="attr_persuade_focus" type="number" value=0></Td>
				<td><button type="action" name="act_persuade"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Making Ranged attacks. Identifying ranged weaponry. Maintaining ranged weaponry.">Ranged (Coordination)</span></Td>
				<td><input class="attributelabel" name="attr_ranged_Weapons_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_ranged_Weapons_TN" type="number" value="@{Ranged_Weapons_exp}+@{coordination}" disabled></Td>
                <td><input class="attributelabel" name="attr_ranged_Weapons_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Ranged_Weapons"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Recovering naturally from loss to Vigor and Trauma. Resisting the effects of poison, disease, and environmental effects.">Resistance (Brawn)</span></Td>
				<td><input class="attributelabel" name="attr_resistance_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_resistance_TN" type="number" value="@{Resistance_exp}+@{brawn}" disabled></Td>
                <td><input class="attributelabel" name="attr_resistance_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Resistance"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Operating and Identifying boats from the River Styx, the Western Ocean, to the Vilayet Sea.">Sailing (Coordination)</span></Td>
				<td><input class="attributelabel" name="attr_sailing_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_sailing_TN" type="number" value="@{Sailing_exp}+@{coordination}" disabled></Td>
                <td><input class="attributelabel" name="attr_sailing_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Sailing"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Knowledge of economics across the Hyborian kingdoms. Skill at buying and selling items and finding a good deal. Dealing with merchant contracts on the Road of Kings.">Society (Persuade)</span></Td>
				<td><input class="attributelabel" name="attr_society_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_society_TN" type="number" value="@{Society_exp}+@{personality}" disabled></Td>
                <td><input class="attributelabel" name="attr_society_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Society"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Recognizing sorcery in action or from its effects. Knowledge of sorcerers and their doings. Casting spells. Identifying the presence of the unnatural.">Sorcery (Willpower)</span></Td>
				<td><input class="attributelabel" name="attr_sorcery_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_sorcery_TN" type="number" value="@{Sorcery_exp}+@{willpower}" disabled></Td>
                <td><input class="attributelabel" name="attr_sorcery_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Sorcery"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Moving quietly. Hiding quickly. Hiding objects on one’s person. Disguising oneself.">Stealth (Agility)</span></Td>
				<td><input class="attributelabel" name="attr_stealth_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_stealth_TN" type="number" value="@{Stealth_exp}+@{agility}" disabled></Td>
                <td><input class="attributelabel" name="attr_stealth_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Stealth"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Navigating an unfamiliar environment. Finding shelter. Avoiding environmental hazards. Tracking others.">Survival (Awarness)</span></Td>
				<td><input class="attributelabel" name="attr_survival_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_survival_TN" type="number" value="@{Survival_exp}+@{Awareness}" disabled></Td>
                <td><input class="attributelabel" name="attr_survival_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Survival"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR  class="skillrow">
                <Td><span class="skilllabel" title="Picking locks or disarming traps. Sleight of hand. Identifying strengths and weaknesses in security measures. Understanding crime and criminal activity. Interacting with criminals.">Thievery (Awarness)</span></Td>
				<td><input class="attributelabel" name="attr_thievery_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_thievery_TN" type="number" value="@{Thievery_exp}+@{Awareness}" disabled></Td>
                <td><input class="attributelabel" name="attr_thievery_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Thievery"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
            <TR class="skillrow">
                <Td><span class="skilllabel" title="Mass combat tactics, logistics, and strategies. Operating and maintaining siege weapons. Commanding groups in combat. Battlefield reconnaissance.">Warfare (Intelligence)</span></Td>
				<td><input class="attributelabel" name="attr_warfare_exp" type="number" value=0></Td>
                <td><input class="attributelabel" name="attr_warfare_TN" type="number" value="@{Warfare_exp}+@{intelligence}" disabled></Td>
                <td><input class="attributelabel" name="attr_warfare_focus" type="number" value=0></Td>
				<td><button type="action" name="act_Warfare"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </TR>
        </table>
    </div>-->

    <!-- ********************************** -->
    <!-- MOMENTUM, FORTUNE & GOLD PANEL -->
    <!-- ********************************** -->
    <div class="momentumpanel">
        <span class="conanheader">Momentum</span><BR>
        <img src="https://i.imgur.com/ixvmhBJ.png" width="40" height="40" title="Momentum">
        <input type="number" class="big-value" name="attr_momentum" value="0"><button class="blankroll" type="roll" value="!spendmomentum @{character_id} ?{Misc spend|0} Miscellaneous">Spend<img src="https://i.imgur.com/IhU37jG.png" title="spend momentum" width="30"></button><BR>
        <button class="blankroll" type="roll" value="!transfermomentum @{character_id} GMPANEL">Get Pool</button>
        <button class="blankroll" type="roll" value="!savemomentum @{character_id} GMPANEL">Save to Pool</button><br>
    </div>

    <div class="fortunepanel">
        <span class="conanheader">Fortune</span> 
        <table>
            <tr>
                <td>
                    <img src="https://i.imgur.com/sZW28jM.png" width="40" height="40" title="Fortune">
                    <input type="number" class="big-value" name="attr_fortune" value=0><br>
                    Starting Fortune: <input type="number"  name="attr_initialfortune" value=3><br>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="action" name="act_addlucky20"><img src="https://i.imgur.com/2ICBcHS.png" width="30" height="30" title="d20 as 1"></button>
                    <button type="action" name="act_secondaction" value="Test"><img src="https://i.imgur.com/po9edQU.png" width="30" height="30" title="Second Standard Action"></button>
                    <button type="action" name="act_recoverfortunevigor"><img src="https://i.imgur.com/L3cDHdn.png" width="30" height="30" title="Recover Vigor"></button><br>
                    <button type="action" name="act_recoverfortuneresolve"><img src="https://i.imgur.com/rB3OOWS.png" width="30" height="20" title="Recover Resolve"></button>
                    <button type="action" name="act_ignorewounds"><img src="https://i.imgur.com/8fwcutf.png" width="30" height="30" title="Ignore Wounds"></button>
                    <button type="action" name="act_ignoretrauma"><img src="https://i.imgur.com/vifGg3x.png" width="30" height="30" title="Ignore Trauma"></button><br>
                    <input type="checkbox" value="1" name="attr_ignorewounds"> Ignoring wounds.<br>
                    <input type="checkbox" value="1" name="attr_ignoretrauma"> Ignoring trauma.<br>
                </td>
            </tr>
        </table>        
    </div>
    <!-- ********************************** -->
    <!-- STRESS & HARM PANEL -->
    <!-- ********************************** -->
    <div class="stresspanel">
        <table>
            <tr>
                <TD>
                    <img src="https://i.imgur.com/wfVRqrR.png" width="20" height="20" title="Physical"><span class="conanheader">Vigor</span><BR>
					<input name="attr_vigor_current" type="number" value=0 class="die-value">/
					<input type="number" name="attr_maxvigor" class="attributelabel-NP" value="0">
                    </TD>
                <TD>
				    <input name="attr_wound1" type="checkbox" value="1">
                    <input name="attr_wound2" type="checkbox" value="1">
                    <input name="attr_wound3" type="checkbox" value="1">
                    <input name="attr_wound4" type="checkbox" value="1">
                    <input name="attr_wound5" type="checkbox" value="1">Wounds
					<br>
					<input name="attr_Hwound1" type="checkbox" value="1">
                    <input name="attr_Hwound2" type="checkbox" value="1">
                    <input name="attr_Hwound3" type="checkbox" value="1">
                    <input name="attr_Hwound4" type="checkbox" value="1">
                    <input name="attr_Hwound5" type="checkbox" value="1">Treated
                    <input type="hidden" class="die-value" name="attr_totalwounds" value="0">
                </TD>
				<td>
                    <img src="https://i.imgur.com/JdXfCGh.png" width="30" title="source: imgur.com" />
				</td>
                <TD>
                    <img src="https://i.imgur.com/ZSTbqZ5.png" width="20" height="20" title="Mental"> <span class="conanheader">Resolve</span><BR> 
					<input name="attr_resolve_current" type="number" value=0 class="die-value">/
                    <input type="number" name="attr_maxresolve" class="attributelabel-NP" value="0" >
				</TD>
                <TD>
                    <input name="attr_trauma1" type="checkbox" value="1">
                    <input name="attr_trauma2" type="checkbox" value="1">
                    <input name="attr_trauma3" type="checkbox" value="1">
                    <input name="attr_trauma4" type="checkbox" value="1">
                    <input name="attr_trauma5" type="checkbox" value="1">Trauma
					<br>
					<input name="attr_Htrauma1" type="checkbox" value="1">
                    <input name="attr_Htrauma2" type="checkbox" value="1">
                    <input name="attr_Htrauma3" type="checkbox" value="1">
                    <input name="attr_Htrauma4" type="checkbox" value="1">
                    <input name="attr_Htrauma5" type="checkbox" value="1">Treated
					<input type="hidden" class="die-value" name="attr_totaltrauma" value="0">
                </TD>
            </tr>
        </table>
		<p align="center">
            <input name="attr_fatigue1" type="checkbox" value="1">
            <input name="attr_fatigue2" type="checkbox" value="1">
            <input name="attr_fatigue3" type="checkbox" value="1">
            <input name="attr_fatigue4" type="checkbox" value="1">
            <input name="attr_fatigue5" type="checkbox" value="1">
            <input name="attr_fatigue6" type="checkbox" value="1">
            <input name="attr_fatigue7" type="checkbox" value="1">
            <input name="attr_fatigue8" type="checkbox" value="1">
            <input name="attr_fatigue9" type="checkbox" value="1">
            <input name="attr_fatigue10" type="checkbox" value="1">
            <input type="hidden" class="die-value" name="attr_totalfatigue" value="0">
            Fatigue
            <img src="https://i.imgur.com/DSePK2T.png" width="20" height="20" title="">
            Despair
            <input name="attr_despair1" type="checkbox" value="1">
            <input name="attr_despair2" type="checkbox" value="1">
            <input name="attr_despair3" type="checkbox" value="1">
            <input name="attr_despair4" type="checkbox" value="1">
            <input name="attr_despair5" type="checkbox" value="1">
            <input name="attr_despair6" type="checkbox" value="1">
            <input name="attr_despair7" type="checkbox" value="1">
            <input name="attr_despair8" type="checkbox" value="1">
            <input name="attr_despair9" type="checkbox" value="1">
            <input name="attr_despair10" type="checkbox" value="1">
            <input type="hidden" class="die-value" name="attr_totaldespair" value="0"><BR>
            <button type="action" name="act_resetstress">Reset Stress</button><BR>
        </p>
    </div>

    <!-- ********************************** -->
    <!-- DIE CONTROL PANEL -->
    <!-- ********************************** 
    <div class="diecontrol">
        <span class="conanheader">2d20 Dice Roller</span><br>
        <span class="attributelabel">1. Set Difficulty</span>
        <button type="action" name="act_d0">0</button>
        <button type="action" name="act_d1">1</button>
        <button type="action" name="act_d2">2</button>
        <button type="action" name="act_d3">3</button>
        <button type="action" name="act_d4">4</button>
        <button type="action" name="act_d5">5</button>
        <br>
        <span class="dielabel">2. Select Skill:</span>
        <select name="attr_currentskillname" value="none" class="width10" >
            <option value="survival">Survival</option>
            <option value="melee">Melee</option>
            <option value="acrobatics">Acrobatics</option>
        </select>
        <BR>
        <input type="text" name="attr_currentskillname" value="None" class="width10" readonly><br>
        <span class="dielabel">> TN:</span><input type="number" class="attributelabel-1" name="attr_currentTN" value=0 readonly>
        <span class="dielabel">FC:</span><input type="number" class="attributelabel-1" name="attr_currentFC" value=0 readonly><BR>
        
        <!- Hidden fields to calculate difficulties based on harm and skill type 
        <input type="hidden" name="attr_currenttype" value="">
        <input type="hidden" name="attr_currentfail" value="20">
        <input type="hidden" name="attr_currenttrauma" value="0">
        <input type="hidden" class="die-value" name="attr_adjusted_difficulty" value="[[@{difficulty}+@{currentharm}]]" disabled>    

        <span class="attributelabel">> vs. difficulty</span>
        <input type="number" name="attr_difficulty" class="die-value" readonly> <span class="attributelabel-NP">+ Harms</span><input class="die-value" type="number" name="attr_currentharm" value="0"><br>

        <span class="attributelabel">3. Choose dice to add to your roll here</span><BR>
		<p align="center">
			<input type="hidden" name="attr_baseroll" value="[[2+@{d20momentum}+@{d20doom}]]">
			<input type="hidden" name="attr_fortuneroll" value="[[@{d20fortune}<@{currentFC}]]">
            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="35" height="30"></button>
            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
            <button type="action" title="Give GM 1 doom for +1d20." name="act_adddie_doom"><img src="https://i.imgur.com/5V9R08u.png" width="35" height="30"></button>
            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="35" height="30"></button>
            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="35" height="30"></button>
            <button type="action" name="act_cleardice" title="Redistribute points">Reset Dice</button>
            

        </p>
        <hr class="minorbreak">
        <span class="conanheader">Current dice being rolled...</span><BR>
            <p align="center">

            <span class="dielabel">2d20 +</span>
            <input type="hidden" name="attr_d20momentum" class="die-value" readonly value=0 title="Dice from momentum">
            <input type="hidden" name="attr_spentmom" value=0>
            <input type="hidden" name="attr_d20doom" class="die-value" readonly value=0 title="Dice from doom">
            <input type="hidden" name="attr_d20fortune" class="die-value" readonly value=0 title="Dice from fortune">
            <input type="hidden" name="attr_d20exception" class="die-value" readonly value=0 title="Dice from talents/loads/equipment">
            <input type="number" class="big-value" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
 
	       	<button type="roll" name="skill_check" value="!skillcheck @{character_id} skill 2">4. Roll</button> 
      

            <!- OLD ROLL MACRO BEFORE API 
            <!-<button type="roll" name="skill_check" value="&{template:conanroll}{{name=@{character_name}}}{{skill=@{currentskillname}}}{{diff=@{adjusted_difficulty}}}{{momentumdice=@{d20momentum}}}{{spentmomentum=@{spentmom}}}{{doomdice=@{d20doom}}}{{fortunedice=@{d20fortune}}}{{result=[[@{baseroll}d20<@{currentTN}cs@{currentFC}cf@{currentFail}]]}}{{fortune=[[@{d20fortune}d1<@{currentTN}cf@{currentFC}]]}}">Roll Dice</button>
		</p>
    </div> -->
    <div class="armorpanel">
        <span class="conanheader">Soak</span><BR>
            <table border=1>
                <tr>
                    <Th>
                        Courage<br>
                        <img src="https://i.imgur.com/LhSDvxX.png" width="40" height="40" title="courage">
                        <button type="roll" name="courage" value="&{template:cover}{{name=@{character_name}}}{{spend_name=Courage}}{{cover=[[@{shield}t[CD]]]}}"></button><br>
                        <input type="number" class="die-value" name="attr_courage" value="0">
                       
                    </Th>
                    <td>
                        Head<br>
                        <img src="https://i.imgur.com/qOP0Iwo.png" width="40" height="40" title="head"><br>
                        <input type="number" class="die-value" name="attr_head" value="0">
                        <input name="attr_headbroken" type="checkbox" value="1" title="Check if Broken">
                    </td>
                    <th>
                        Shield<br>
                        <img src="https://i.imgur.com/1t3uXJG.png" width="40" height="40" title="shield">
                        <button type="roll" name="shield" value="&{template:cover}{{name=@{character_name}}}{{spend_name=Shield}}{{cover=[[@{shield}t[CD]]]}}"></button><Br>
                        <input type="number" class="die-value" name="attr_shield" value="0">
                        <input name="attr_shiledbroken" type="checkbox" value="1" title="Check if Broken">
                       
                        </th>
                </tr>
                <Td>
                    Right Arm<br>
                    <img src="https://i.imgur.com/mnUTVL5.png" width="40" height="40" title="Right arm"><br>
                    <input type="number" class="die-value" name="attr_rightarm" value="0">
                    <input name="attr_rightarmbroken" type="checkbox" value="1" title="Check if Broken">
                </Td>
                <td>
                    Torso<br>
                    <img src="https://i.imgur.com/qgpgKt4.png" width="60" title="Torso"><br>
                    <input type="number" class="die-value" name="attr_torso" value="0">
                    <input name="attr_torsobroken" type="checkbox" value="1" title="Check if Broken">
                </td>
                <td>
                    Left Arm<br>
                    <img src="https://i.imgur.com/Pmc8Cly.png" width="40" height="40" title="Left arm"><br>
                    <input type="number" class="die-value" name="attr_leftarm" value="0">
                    <input name="attr_leftarmbroken" type="checkbox" value="1" title="Check if Broken">
                </td>
            </tr>
            <tr>
                <Td>
                    Right Leg<br>
                    <img src="https://i.imgur.com/g3ImQRv.png" width="40" height="40" title="Right leg"><br>
                    <input type="number" class="die-value" name="attr_rightleg" value="0">
                    <input name="attr_rightlegbroken" type="checkbox" value="1" title="Check if Broken">
                </Td>
                <td>

                </td>

                <td>
                    Left Leg<br>
                    <img src="https://i.imgur.com/6zEILWX.png" width="40" height="40" title="Left leg"><br>
                    <input type="number" class="die-value" name="attr_leftleg" value="0">
                    <input name="attr_leftlegbroken" type="checkbox" value="1" title="Check if Broken">
                </td>
            </tr>
            </table>
            Qualities<input type="text" name="attr_armorqualities">
        <Br>

    </div>

    <!-- ********************************** -->
    <!-- TALENT PANEL -->
    <!-- ********************************** -->
    <div class="talentpanel">
	    <span class="conanheader">Talents</span><Br>
		<fieldset class="repeating_talents">
			<input type="text" class="talentlabel" name="attr_talentname" value="new talent name">
            Rank<input type="number" class="die-value" name="attr_talentrank" value="0" title="Rank (if any)">
            Max Rank<input type="number" class="die-value" name="attr_talenmaxtrank" value="0" title="Maximum Rank if applicable">
            <img src="https://i.imgur.com/U21VHwt.png" width="10"> 
            Cost<input type="number" class="die-value" name="attr_talentcost" value="0" title="Momentum cost (if any)"><br>
            <textarea name="attr_talentdesc" class="talentarea"></textarea><br>
            Xp Cost<input type="number" class="die-value" name="attr_talentXPcost" value="0" title="Cost to purchase talent">
            <button class="blankroll" type="roll" name="act_ctivate_talent" value="&{template:conantalent}{{name=@{character_name}}}{{talent=@{talentname}}}{{rank=@{talentrank}}}{{cost=@{talentcost}}}{{desc=@{talentdesc}}}{{button=[Spend Momentum](!spendmomentum @{character_id} @{talentcost} @{talentname})}}">Use</button>
  		</fieldset>
    </div>

    <!-- ********************************** -->
    <!-- QUICK MOMENTUM PANEL -->
    <!-- ********************************** 
    <div class="quickmomentumpanel">
        <span class="conanheader">Combat Momentum Spends</span><Br>
        <button type="roll" title="Disarm, one or two handed" value="!quickspend @{character_id} disarm ?{How many points? (1 for 1-handed, 2 for 2-handed)|1}">
            <img src="https://i.imgur.com/t67lFrC.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            /<img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="2nd Action at +1 Diff" value="!quickspend @{character_id} swift 2">
            <img src="https://i.imgur.com/po9edQU.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="+1 Damage" value="!quickspend @{character_id} extradamage ?{How many points|1}">
            <img src="https://i.imgur.com/z7RbgaQ.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/I8cMgCs.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll"  title="Re-Roll Damage" value="!quickspend @{character_id} rerolldamage ?{How many dice?|1}">
            <img src="https://i.imgur.com/58exJrl.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
        <BR>
        <button type="roll" title="Piercing 2" value="!quickspend @{character_id} piercing ?{How much momentum?|1}">
            <img src="https://i.imgur.com/inTQtcD.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/I8cMgCs.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="Courage +1cd for round" value="!quickspend @{character_id} courage ?{How much momentum?|1}">
            <img src="https://i.imgur.com/J9UeE5U.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/I8cMgCs.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="1/2 damage to 2nd target in reach" value="!quickspend @{character_id} halfdmg ?{How much damage?|1}">
            <img src="https://i.imgur.com/3fAdEz9.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll"  title="Recover 1 vigor" value="!quickspend @{character_id} recovervigor ?{Recover how much vigor?|1}">
            <img src="https://i.imgur.com/L3cDHdn.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/I8cMgCs.png" width="10" height="10" title="Momentum">
        </button>
        <BR>
        <button type="roll" title="Recover 1 resolve" value="!quickspend @{character_id} recoverresolve ?{Recover how much resolve?|1}">
            <img src="https://i.imgur.com/rB3OOWS.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/I8cMgCs.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="Withdraw" value="!quickspend @{character_id} withdraw 1">
            <img src="https://imgur.com/Da5RMRO.png" width="30" height="30"><BR>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
        <button type="roll" title="Called Shot" value="!quickspend @{character_id} called 2">
            <img src="https://i.imgur.com/d9QZYil.png" width="30" height="30"><br>
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
            <img src="https://i.imgur.com/ixvmhBJ.png" width="10" height="10" title="Momentum">
        </button>
    </div>-->
</div>

    <!-- ********************************** -->
    <!-- PC-Detail Page -->
    <!-- ********************************** -->

<div class="sheet-PCdetail">
    <div class="detailpanel">
        <span class="conanheader">Character Details</span><Br>
        <input type="text" class="talentlabel" name="attr_castelabel" value="Caste" readonly> <input type="text" name="attr_caste" value="None" class="width10"> <BR>
        <input type="text" class="talentlabel" name="attr_archetypelabel" value="Archetype" readonly> <input type="text" name="attr_archetype" value="None" class="width10"><BR>
        <input type="text" class="talentlabel" name="attr_educationlabel" value="Education" readonly> <input type="text" name="attr_education" value="None" class="width10">  <BR>
        <input type="text" class="talentlabel" name="attr_Homelandlabel" value="Homeland" readonly> <input type="text" name="attr_homeland" value="None" class="width10"><BR>
        <input type="text" class="talentlabel" name="attr_traitlabel" value="Trait" readonly><input type="text" name="attr_trait" value="None" class="width10"><BR>
        <input type="text" class="talentlabel" name="attr_naturelabel" value="Nature" readonly> <input type="text" name="attr_nature" value="None" class="width10"><BR>
        <input type="text" class="talentlabel" name="attr_warstorylabel" value="War Story" readonly> <input type="text" name="attr_warstory" value="None" class="width10">
        
        <input type="text" class="talentlabel" name="attr_languageslabel" value="Languages" readonly><br> <input type="text" name="attr_languages" value="None" class="width30">
    </div>
    <div class="attributespanel">
        <table>
            <tr><td><span class="conanheader">Attribute</span></td><td><span class="conanheader">Score</span></td><td><span class="conanheader">Dmg Bonus</span></td></tr>
            <tr><td><span class="attributelabel">Agility</span></td><td><input class="attributevalue-2" name="attr_agility" type="number" value=0></td></tr>
            <tr><td><span class="attributelabel">Awareness</span></td><td><input class="attributevalue-2" name="attr_awareness" type="number" value=0></td><td><input class="attributelabel" name="attr_ranged_bonus" title="Ranged bonus" type="number" value=0></td></tr>
            <tr><td><span class="attributelabel">Brawn</span></td><td><input class="attributevalue-2" name="attr_brawn" type="number" value=0></td><td><input class="attributelabel" name="attr_melee_Bonus" type="number" title="Melee bonus" value=0></td></tr>
            <tr><td><span class="attributelabel">Coordination</span></td><td><input class="attributevalue-2" name="attr_coordination" type="number" value=0></td></tr>
            <tr><td><span class="attributelabel">Intelligence</span></td><td><input class="attributevalue-2" name="attr_intelligence" type="number" value=0></td></tr>
            <tr><td><span class="attributelabel">Personality</span></td><td><input class="attributevalue-2" name="attr_personality" type="number" value=0></td><td><input class="attributelabel" name="attr_threat_bonus" title="Threat bonus" type="number" value=0></td></tr>
            <tr><td><span class="attributelabel">Willpower</span></td><td><input class="attributevalue-2" name="attr_willpower" type="number" value=0></td></tr>
        </table>
    </div>
    <!-- ********************************** -->
    <!-- Equipment Panel -->
    <!-- ********************************** -->
    <div class="equipmentpanel">
        <span class="conanheader">Equipment</span><Br>
        Max Weight: <input type="number" name="attr_maxweight" value="(@{brawn}*2)+@{adjustment}" disabled>
        
        Adjustment: <input type="number" name="attr_adjustment" value="0"><BR>
        Carried weight: <input type="number" name="attr_carriedweight" value="0" readonly>
        <fieldset class="repeating_equipment">
            <input type="text" class="width10" name="attr_equipmentname" value="Name" title="Eqipment name">
            Eff: <input type="text" class="width15" name="attr_equipmenteffect" value="effect" title="Equipmentfffect">
            Enc: <input type="number" class="die-value" name="attr_equipmentweight" value="Weight" title="Equipment Weight">
            Qty: <input type="number" class="die-value" name="attr_equipmentqty" value="1" title="Equipment quantity">
            Ttl enc: <input type="number" class="die-value" name="attr_totalweight" value="@{equipmentweight}*@{equipmentqty}" disabled title="Total Weight">
        </fieldset>
    </div>
    <div class="moneypanel">
        <span class="conanheader">Money</span><Br>

        <img src="https://i.imgur.com/H62YLyk.png" width="40" height="40" title="gold">
        <input type="number" class="die-value" name="attr_gold" value="0">
        <span class="attributelabel">Gold</span>
        <button class="blankroll" type="roll" value="!spendgold @{character_id} ?{how much|1}">Spend <img src="https://i.imgur.com/2aj8eEM.png" title="spend gold" width="20" height="20"></button><BR>
        <span class="conanheader">Experience</span><Br>
        <img src="https://i.imgur.com/wDbYvFO.png" width="40" height="40" title="Experience">
        <input type="number" class="die-value" name="attr_exp" value="0" title="Experience to spend.">
        <span class="attributelabel">Experience</span>
        <input type="number" class="die-value" name="attr_spentexp" value="0" title="Spent experience.">
        <span class="attributelabel">Spent Experience</span>    
    </div>
    <div class="renownpanel">
        <span class="conanheader">Renown & Upkeep</span><Br>
        <table>
            <tr>
                <td>
                    <img src="https://i.imgur.com/LPIBJwe.png" width="40" height="40" title="Reduces upkeep cost.">
                    <input type="number" class="die-value" name="attr_renown" value="0">
                    <span class="attributelabel" title="Reduces upkeep cost.">Renown</span><BR>

                    <img src="https://i.imgur.com/6DSJ4hN.png" width="40" height="40" title="Increases upkeep cost.">
                    <input type="number" class="die-value" name="attr_socialstanding" value="0">
                    <span class="attributelabel" title="Increases upkeep cost.">Social Standing</span><BR>

                    <img src="https://i.imgur.com/IhU37jG.png" width="40" height="40" title="Cost to live between adventures.">
                    <input type="number" class="die-value" name="attr_upkeep" value="3+@{socialstanding}-@{renown}+@{upkeepadjust}" disabled>
                    <span class="attributelabel" title="Cost to live between adventures.">Upkeep</span><button class="blankroll" type="roll" value="!spendgold @{character_id} ?{how much} Upkeep"><img src="https://i.imgur.com/2aj8eEM.png" title="spend gold" width="20" height="20"></button><BR>
                </td>
                <td>
                    <img src="https://i.imgur.com/6IBUDHV.png" width="40" height="40" title="talent Adjustment.">
                    <input type="number" class="die-value" name="attr_upkeepadjust" value="0">
                    <span class="attributelabel" title="talent Adjustment.">Adjust</span><BR>
                </td>
            </tr>
        </table>
            </div>




    <!-- ********************************** -->
    <!-- Alchemy Panel -->
    <!-- ********************************** -->
    <div class="alchemypanel">
        <span class="conanheader">Petty Enchantments</span><Br>
    <!--    <fieldset class="repeating_pettyenchantment">
            <span class="talentlabel">Petty Enchantment:</span><input type="text" class="width15" name="attr_pettyenchantmentname" value="Petty Enchantment Type"><BR>-->
        <fieldset class="repeating_alchemyspends">
            <img src="https://i.imgur.com/U21VHwt.png" width="10"> 
            Name:<input type="text" class="width15" name="attr_pettyenchantmentname" value="name">
            
            CD:<input type="number" class="die-value" name="attr_pettyenchantmentdamage" value="0">
            Eff:<input type="text" class="width15" name="attr_pettyenchantmenteffects" value="effects">
            In:<input type="number" class="die-value" name="attr_enchantingedientcost" value="1" title="cost to create">
            Diff:<input type="number" class="die-value" name="attr_alchemicaldifficulty" title="Difficulty to create">
            Qty:<input type="number" class="die-value" name="attr_enchantment_qty" value="0">
            <!--<button type="roll" class="blankroll" value=""><img src="https://i.imgur.com/yQj6HxR.png" width="20" height="20"></button>-->
            <button type="roll" class="blankroll" title="Damage roll" value="&{template:CDroll}{{name=@{character_name}}}{{damagename=@{pettyenchantmentname}}}{{effects=@{pettyenchantmenteffects}}}{{result=[[@{pettyenchantmentdamage}t[CD]]]}}{{location=[[1t[HITLOC]]]}}"><img src="https://i.imgur.com/yQj6HxR.png" width="20" height="20"></button>

        </fieldset>
        <!--    <hr class="minorbreak">
        </fieldset>-->
        <span class="">Ingredients</span><input type="number" name="attr_ingredients" title="raw ingredients">
    </div>

    <!-- ********************************** -->
    <!-- Spell Panel -->
    <!-- ********************************** 
    <div class="spellpanel">
        <span class="conanheader">Spells</span><Br>
        <input type="text" class="talentlabel" name="attr_currentspellname" value="">
        <input type="number" class="die-value" name="attr_currentresolvecost" value="">
		<fieldset class="repeating_spells">
			<input type="text" class="talentlabel" name="attr_spellname" value="enter name">
			Resolve Cost<input type="number" class="die-value" name="attr_spellresolvecost"><BR>
            <input type="textbox" name="attr_spelldesc">
            <fieldset class="repeating_spellspends">
                <input type="text" class="talentlabel" name="attr_spellspend" value="desc">
                $<input type="number" class="die-value" name="attr_spellspendcost">
                <button type="roll" class="blankroll" value=""><img src="https://i.imgur.com/yQj6HxR.png" width="10"></button>
            </fieldset>
        </fieldset>
    </div>-->
    <div class="spellpanel">
        <span class="conanheader">Spells</span>
        <button type="action" name="act_Sorcery"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Sorcery"></button><BR>
        Current Momentum:<input type="number" class="die-value" name="attr_momentum" value="0"><button class="blankroll" type="roll" value="!spendmomentum @{character_id} ?{Misc spend|0} Spell"><img src="https://i.imgur.com/IhU37jG.png" title="spend momentum" width="30"></button><BR>

        <fieldset class="repeating_spells">
            <input type="text" class="talentlabel" name="attr_currentspellname" value="Spell Name">
            Resolve Cost:<input type="number" class="die-value" name="attr_currentresolvecost" value="1">
            Basic Difficulty:<input type="number" class="die-value" name="attr_basicspelldiff" value="1">
 
            <BR>
            <textarea class="spellarea" name="attr_spelldesc">Spell Desc</textarea><BR>
            <textarea class="talentarea" name="attr_spellspends">Momentum Spends</textarea><BR>    
            Duration: <input type="text" class="width20" name="attr_spellduration" value="name">
            <hr class="minorbreak">
        </fieldset>
    </div>
</div>

<!--************************************************************************-->
<!-- END PC SHEET!-->
<!--************************************************************************-->
<!-- ********************************** -->
<!-- START NPC SHEET -->
<!-- ********************************** -->
<div class="sheet-NPC">
	<div class="NPCName">
        <input class="charname_label" name="attr_character_name"><BR>
        <input type="radio" name="attr_npcwounds" value="1"><span class="tinytext">Minion</span>
        <input type="radio" name="attr_npcwounds" value="2"><span class="tinytext">Toughened</span>
        <input type="radio" name="attr_npcwounds" value="5"><span class="tinytext">Nemesis</span>
        <input type="number" name="attr_npcbase_dice" value=1 readonly hidden >
        <BR>
        <input type="checkbox" name="attr_miniondice" value="1"><span class="tinytext" title="Roll additional dice for a mob.">Additional Minions</span>
        <input type="checkbox" name="attr_minion1" value="1">
        <input type="checkbox" name="attr_minion2" value="1">
        <input type="checkbox" name="attr_minion3" value="1">
        <input type="checkbox" name="attr_minion4" value="1">
        <input type="hidden" name="attr_mobsize" class="die-value" value="@{minion1}+@{minion2}+@{minion3}+@{minion4}" readonly disabled>
	</div>
	<div class="NPCAttribs">
        <br>
        <table class="NPC-table" border=1>
			<tr>
				<td colspan="4">
                    <span class="conanheader">Attributes</span>
				</td>
			</tr>
			<TR>
				<td>
				<span class="NPC-attributelabel" title="Awareness represents perception and sense acuity across all five of the key senses: vision, hearing, feeling, taste, and smell. Awareness governs Insight, Observation, Survival, and Thievery, and determines your bonus damage with ranged weapons." >Awareness</span><br>
                <input class="attributelabel" name="attr_awareness" type="number" value=0>
                <button type="action" name="act_awareness"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Attribute"></button>
				</td>
				<td>
				<span class="attributelabel" title="Intelligence is the measure of your wit, intellect, and a combination of studies and cunning learned on the streets. Intelligence governs Craft, Healing, Linguistics, and Lore, as well as less-common skills like Alchemy and Warfare.">Intelligence</span><br>
                <input class="attributelabel" name="attr_intelligence" type="number" value=0>
                <button type="action" name="act_intelligence"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>
				</td>
				<td>
				<span class="attributelabel" title="A measure of your charisma, ease of social interaction, and ability to be charming or deceptive as needed. Personality governs skills such as Animal Handling, Command, Counsel, Persuade, and Society. Personality also determines your bonus damage for Threaten actions.">Personality</span><br>
                <input class="attributelabel" name="attr_personality" type="number" value=0>
                <button type="action" name="act_personality"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>

				</td>
				<td>
				<span class="attributelabel" title="A person’s force of will, and mental resolve, the Willpower attribute governs Discipline and Sorcery. Equally as important, Willpower determines your Resolve capacity, the reserve of sanity that prevents mental trauma.">Willpower</span><br>
                <input class="attributelabel" name="attr_willpower" type="number" value=0>
                <button type="action" name="act_willpower"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>

				</td>
				</tr>
				<tr>
				<td>
				<span class="attributelabel" title="Agility is the measure of your physical and manual dexterity, sense of balance, and body control. This attribute governs the Acrobatics, Melee, and Stealth skills.">Agility</span><br>
                <input class="attributelabel" name="attr_agility" type="number" value=0>
                <button type="action" name="act_agility"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>

				</td>
				<td>
				<span class="attributelabel" title="A measure of might, endurance, toughness, and the physical force you can exert, Brawn governs Athletics and Resistance, and determines your close combat damage bonus and the Vigor reserve, the amount of physical injury or stress that you can withstand.">Brawn</span><br>
                <input class="attributelabel" name="attr_brawn" type="number" value=0>
                <button type="action" name="act_brawn"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>

				</td>
				<td>
				<span class="attributelabel" title="The Coordination attribute describes hand–eye coordination, aim, and ability to navigate within one’s surroundings, both physically and mentally. Coordination governs the Parry, Ranged Weapons, and Sailing skills.">Coordination</span><br>
                <input class="attributelabel" name="attr_coordination" type="number" value=0>
                <button type="action" name="act_coordination"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button>

				</td>
			</tr>
            </table>
            <BR>
			<table border=1 class="NPC-table">
			<tr>
				<td colspan="4">
				<span class="conanheader">Fields of Expertise</span>
                </td>
			</tr>
            <tr>
                <td>Expertise Name</td>
                <td>EXP</td>
                <td>Use</td>
            </tr>
            <tr>
				<td><span class="attributelabel" title="This covers the various tools and techniques for bringing death and destruction. It encompasses the skills Melee, Parry, Ranged Weapons, and Warfare.">Combat</span></td>
                <td><input class="attributelabel" name="attr_combat" type="number" value=0 ></td>
                <td><button type="action" name="act_combat"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </tr>
			<tr>
				<td><span class="attributelabel" title="This covers the ways a character may move around a scene, both personally and using vehicles. It encompasses the skills Acrobatics, Athletics, Sailing, and Stealth.">Movement</span></td>
                <td><input class="attributelabel" name="attr_movement" type="number" value=0></td>
                <td><button type="action" name="act_movement"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
			</tr>
			<tr>
                <td><span class="attributelabel" title="This covers the means by which a character can survive in a hostile universe. It encompasses the skills Discipline, Resistance, and Survival.">Fortitude</span></td>
                <td><input class="attributelabel" name="attr_fortitude" type="number" value=0></td>
                <td><button type="action" name="act_fortitude"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
            </tr>
			<tr>
				<td><span class="attributelabel" title="This covers the character’s ability to perceive the world’s details. It encompasses the skills Insight, Observation, and Thievery.">Senses</span></td>
                <td><input class="attributelabel" name="attr_senses" type="number" value=0></td>
                <td><button type="action" name="act_senses"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>
			</tr>
			<tr>
				<td><span class="attributelabel" title="This covers skills reliant on considerable intellect and knowledge. It encompasses the skills Alchemy, Animal Handling, Craft, Healing, Lore, Linguistics, and Sorcery.">Knowledge</span></td>
                <td><input class="attributelabel" name="attr_knowledge" type="number" value=0></td>
                <td><button type="action" name="act_knowledge"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>

            </tr>
			<tr>
				<td><span class="attributelabel" title="This covers the character’s ability to influence other creatures with ways other than force. It encompasses the skills Command, Counsel, Persuade, and Society.">Social</span></td>
                <td><input class="attributelabel" name="attr_social" type="number" value=0></td>
                <td><button type="action" name="act_social"><img src="https://i.imgur.com/oD5mOAy.png" width="15" height="15" title="Select Skill"></button></td>

			</tr>
		</table>
    </div>
    <!-- ********************************** -->
    <!-- NPC SOAK PANEL -->
    <!-- ********************************** -->

    <div class="NPCsoakpanel">
        <span class="conanheader">Soak</span><BR>
        <table>
            <tr>
                <TD>
                    <img src="https://i.imgur.com/qgpgKt4.png" width="40" height="40" title="armor"><input type="number" class="die-value" name="attr_soak" value="0"><br>
                    <img src="https://i.imgur.com/1t3uXJG.png" width="40" height="40" title="shield"><input type="number" class="die-value" name="attr_shield" value="0"><button type="roll" name="shield" value="&{template:cover}{{name=@{character_name}}}{{spend_name=Shield}}{{cover=[[@{shield}t[CD]]]}}"></button><Br>  
                </TD>
                <td>
                    <img src="https://i.imgur.com/LhSDvxX.png" width="40" height="40" title="courage"><input type="number" class="die-value" name="attr_courage" value="0"><button type="roll" name="shield" value="&{template:cover}{{name=@{character_name}}}{{spend_name=Courage}}{{cover=[[@{courage}t[CD]]]}}"></button><Br>  
                </td>
            </tr>
        </table>
    </div>

<!--******************-->
<!--  NPC Special abilities PANEL -->
<!--******************-->
    <div class="NPCspecialabilities">
            <span class="conanheader">Special Abilities</span><Br>
            <fieldset class="repeating_abilities">
                <input type="text" class="talentlabel" name="attr_abilityname">
                <input type="text" name="attr_abilitydesc">
            </fieldset>
    </div>
<!--******************-->
<!--  NPC Doom Spend PANEL -->
<!--******************-->

    <div class="NPCdoomspendpanel">
            <span class="conanheader">Doom Spends</span><Br>
             <fieldset class="repeating_talents">
                <input type="text" class="talentlabel" name="attr_talentname" value="Ability"><br>
                <input type="text" name="attr_talentdesc" value="desc">C<input type="number" class="die-value" name="attr_talentcost" value="0">
                <button class="blankroll" type="roll" name="act_ctivate_talent" value="&{template:conantalent}{{name=@{character_name}}}{{talent=@{talentname}}}{{cost=@{talentcost}}}{{desc=@{talentdesc}}}{{button=[Spend Momentum](!spendmomentum @{character_id} @{talentcost} @{talentname})}}">Use</button>
            </fieldset>
    </div>

<!--******************-->
<!--  NPC Momentum PANEL -->
<!--******************-->

 <div class="NPCmomentumpanel"   >
    <span class="conanheader">Momentum</span><BR>
    <img src="https://i.imgur.com/ixvmhBJ.png" width="40" height="40" title="Momentum">
    <input type="number" class="die-value" name="attr_momentum" value="0"><button class="blankroll" type="roll" value="!spendmomentum @{character_id} ?{how much|1} Miscellaneous"><img src="https://i.imgur.com/2aj8eEM.png" title="spend momentum" width="20" height="20"></button><BR>
    <button class="blankroll" type="roll" value="!transferdoom @{character_id} GMPANEL">Get Doom</button>
    <button class="blankroll" type="roll" value="!savedoom @{character_id} GMPANEL">Save Doom</button><br>

 </div>

    <div class="NPCstresspanel">
        <table>
            <tr>
                <TD>
                    <span class="conanheader">Vigor</span><BR>
                    <img src="https://i.imgur.com/L3cDHdn.png" width="20" height="20" title="Physical">
					<input name="attr_vigor_current" type="number" value=0 class="die-value"> /
					<input type="number" name="attr_vigor_max" class="attributelabel-NP" value=0 >
				</TD>
                <TD>
				    <input name="attr_wound1" type="checkbox" value="1">
                    <input name="attr_wound2" type="checkbox" value="1">
                    <input name="attr_wound3" type="checkbox" value="1">
                    <input name="attr_wound4" type="checkbox" value="1">
                    <input name="attr_wound5" type="checkbox" value="1"> Wounds
					<br>
					<input name="attr_Hwound1" type="checkbox" value="1">
                    <input name="attr_Hwound2" type="checkbox" value="1">
                    <input name="attr_Hwound3" type="checkbox" value="1">
                    <input name="attr_Hwound4" type="checkbox" value="1">
                    <input name="attr_Hwound5" type="checkbox" value="1"> Treated
                    <input type="hidden" class="die-value" name="attr_totalwounds" value="0">
                </TD>
            </tr>
        </table><br>
        <table>
            <tr>
                <TD>
                    <span class="attributelabel-NP">Resolve</span><BR>
                    <img src="https://i.imgur.com/rB3OOWS.png" width="20" height="20" title="Mental">
					<input name="attr_resolve_current" type="number" value=0 class="die-value"> /
					<input type="number" name="attr_resolve_max" value=0 class="attributelabel-NP" >
				</TD>
                <TD>
                    <input name="attr_trauma1" type="checkbox" value="1">
                    <input name="attr_trauma2" type="checkbox" value="1">
                    <input name="attr_trauma3" type="checkbox" value="1">
                    <input name="attr_trauma4" type="checkbox" value="1">
                    <input name="attr_trauma5" type="checkbox" value="1">Trauma
					<br>
					<input name="attr_Htrauma1" type="checkbox" value="1">
                    <input name="attr_Htrauma2" type="checkbox" value="1">
                    <input name="attr_Htrauma3" type="checkbox" value="1">
                    <input name="attr_Htrauma4" type="checkbox" value="1">
                    <input name="attr_Htrauma5" type="checkbox" value="1">Treated
					<input type="hidden" class="die-value" name="attr_totaltrauma" value="0">
                </TD>
            </tr>
        </table>
		<p align="center">
            <button type="action" name="act_resetstress">Reset Stress</button><BR>
		</p>
    </div>
    <div class="NPCweapons">
        <span class="conanheader">Attacks</span><BR>
		<fieldset class="repeating_weapons">
            <input type="text" class="weaponheader" value="Weapon Name" name="attr_WeaName">
			<select name="attr_wea-class" class="attribtext">
				<option value="0">M</option>
				<option value="0">R</option>
				<option value="0">T</option>
            </select>
            Rch/Rng <input type="text" class="width5" value="reach" name="attr_reach" title="Reach" value="1">
            CD<input type="number" class="die-value" value="cd" name="attr_CD" title="Combat Dice" value="1">
            <button type="roll" class="blankroll" title="Damage roll" value="!rollcd=@{character_id}=@{WeaName}=@{cd}=@{wea-class}=?{extra dice|0}=@{loadbonus}=@{effects}"><img src="https://i.imgur.com/V0qkLWo.png" width="20"></button>
           <!-- <button type="roll" class="blankroll" title="damage" value="&{template:CDroll}{{name=@{character_name}}}{{effects=@{effects}}}{{result=[[[[@{cd}+@{wea-class}]]t[CD]]]}}"><img src="https://i.imgur.com/V0qkLWo.png" width="20"></button>-->
            <input type="text" value="effects" name="attr_effects" class="width10">
            <input type="number" title="total loads" name="attr_totalloads" value="1">
            <button type="action" name="act_load"><img src="https://i.imgur.com/T5wqenY.png" width="15" title="Use a Load to add d20 and 1cd to current roll."></button>
 
        </fieldset>
        Current loads<input type="text" name="attr_loadbonus" value=0 class="width5" readonly><button type="roll" class="blankroll" title="clear load variable." value="!clearloads @{character_id}">Clear Loads</button>
	</div>
<!--******************-->
<!--  NPC DIE CONTROL -->
<!--******************-->
    <div class="NPCdiecontrol">
        <span class="conanheader">Skill Check</span><br>
        <span class="attributelabel">Set Difficulty</span>
        <button type="action" name="act_d0">D0</button>
        <button type="action" name="act_d1">D1</button>
        <button type="action" name="act_d2">D2</button>
        <button type="action" name="act_d3">D3</button>
        <button type="action" name="act_d4">D4</button>
        <button type="action" name="act_d5">D5</button>
        <br>
        <input type="hidden" name="attr_currentattribute" value="None" class="die-value" readonly>
        <span class="dielabel">Attribute:</span><input type="text" name="attr_currentattributename" value="None" class="width10" readonly>
        <span class="dielabel">TN:</span><input type="number" class="attributelabel" name="attr_currentTN" value=0 readonly> <BR>

        <span class="dielabel">Expertise:</span><input type="text" name="attr_currentskillname" value="None" class="width10" readonly>
        <span class="dielabel">FC:</span><input type="number" class="attributelabel" name="attr_currentFC" value=0 readonly><BR>
        
        <!-- Hidden fields to calculate difficulties based on harm and skill type -->
        <input type="hidden" name="attr_currenttype" value="">
        <input type="hidden" name="attr_currentfail" value="20">
        <input type="hidden" name="attr_currenttrauma" value="0">
        <input type="hidden" class="die-value" name="attr_adjusted_difficulty" value="[[@{difficulty}+@{currentharm}]]" disabled>    

        <span class="attributelabel">vs. difficulty</span>
        <input type="number" name="attr_difficulty" class="die-value" readonly> <span class="attributelabel-NP">+ Harms</span><input class="die-value" type="number" name="attr_currentharm" value="0"><br>
        <br>
        <input type="number" name="attr_npcbase_dice" class="attributelabel-NP" value="0">
        <span class="dielabel">d20 +</span>
        <input type="number" name="attr_d20momentum" class="die-value" readonly value=0 title="Dice from momentum"><span class="dielabel">M +</span><input type="hidden" name="attr_spentmom" value="0">
        <!--
        <input type="number" name="attr_d20doom" class="die-value" readonly value=0 title="Dice from doom"><span class="dielabel">D +</span>
        -->
        <input type="number" name="attr_d20fortune" class="die-value" readonly value=0 title="Dice from fortune"><span class="dielabel">F +</span>
        <input type="number" name="attr_d20exception" class="die-value" readonly value=0 title="Dice from talents/loads/equipment"><span class="dielabel">T</span>
        <input type="hidden" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+{d20exception}" disabled>
        <hr class="minorbreak">

        <p align="center">
			<input type="hidden" name="attr_baseroll" value="[[2+@{d20momentum}+@{d20doom}]]">
			<input type="hidden" name="attr_fortuneroll" value="[[@{d20fortune}<@{currentFC}]]">
            <button type="action" title="+1d20 from momentum." name="act_adddie_momentum"><img src="https://i.imgur.com/ixvmhBJ.png" width="35" height="30"></button>
            <img src="https://i.imgur.com/DSePK2T.png" width="10" title="">
            <button type="action" title="+1d20 from Fortune, rolled as a 1." name="act_addlucky20"><img src="https://i.imgur.com/sZW28jM.png" width="35" height="30"></button>
            <img src="https://i.imgur.com/DSePK2T.png" width="10"title="">
            <button type="action" title="+1d20, no cost, make up deficiencies from loads etc." name="act_add20"><img src="https://i.imgur.com/olwFONA.png" width="35" height="30"></button>

            

        </p>
		<p align="center">
            <button type="action" name="act_cleardice" title="Resets all dice to zero, and removes applied loads.">Reset Dice</button>



            <!-- OLD ROLL MACRO BEFORE API -->
            <!--<button type="roll" name="skill_check" value="!skillcheck @{character_id} skill @{mobsize}">Roll</button> -->
            <!--<button type="roll" name="skill_check" value="&{template:conanroll}{{name=@{character_name}}}{{skill=@{currentskillname}}}{{dice=2}}{{diff=@{adjusted_difficulty}}}{{momentumdice=@{d20momentum}}}{{spentmomentum=@{spentmom}}}{{doomdice=@{d20doom}}}{{fortunedice=@{d20fortune}}}{{result=[[@{baseroll}d20<@{currentTN}cs@{currentFC}cf@{currentFail}]]}}{{fortune=[[@{d20fortune}d1<@{currentTN}cf@{currentFC}]]}}">Roll Dice</button>-->
        </p>
        <span class="conanheader">Current dice being rolled...</span><BR>
            <p align="center">

            <input type="number" name="attr_npcbase_dice" class="attributelabel-NP" value="0">
            <span class="dielabel">d20 +</span>

            <input type="hidden" name="attr_d20momentum" class="die-value" readonly value=0 title="Dice from momentum">
            <input type="hidden" name="attr_spentmom" value=0>
            <input type="hidden" name="attr_d20doom" class="die-value" readonly value=0 title="Dice from doom">
            <input type="hidden" name="attr_d20fortune" class="die-value" readonly value=0 title="Dice from fortune">
            <input type="hidden" name="attr_d20exception" class="die-value" readonly value=0 title="Dice from talents/loads/equipment">
            <input type="number" class="big-value" name="attr_totaldice" value="@{d20momentum}+@{d20fortune}+@{d20doom}+@{d20exception}" readonly disabled>
 
	       <!--	<button type="roll" name="skill_check" value="!skillcheck @{character_id} skill @{mobsize}">4. Roll</button> -->
       	<button type="roll" name="skill_check" value="!skillrow @{character_id} @{npcbase_dice} @{currentTN} @{currentFC} @{currentskillname} @{difficulty}">4. Roll</button> 
	       	
	       
      

            <!-- OLD ROLL MACRO BEFORE API -->
            <!--<button type="roll" name="skill_check" value="&{template:conanroll}{{name=@{character_name}}}{{skill=@{currentskillname}}}{{diff=@{adjusted_difficulty}}}{{momentumdice=@{d20momentum}}}{{spentmomentum=@{spentmom}}}{{doomdice=@{d20doom}}}{{fortunedice=@{d20fortune}}}{{result=[[@{baseroll}d20<@{currentTN}cs@{currentFC}cf@{currentFail}]]}}{{fortune=[[@{d20fortune}d1<@{currentTN}cf@{currentFC}]]}}">Roll Dice</button>-->
		</p>
    </div>
</div>

<div class="sheet-GM">
    <div class="gmpanel">
        <input type="number" name="attr_momentum"><button type="roll" class="blankroll" title="Subtract 1 from Momentum" value="!decreasemomentum GMPANEL 1"><img src="https://imgur.com/DxddPM7.png" width="22"></button><br>
        <label>Momentum</label>
        <input type="number" name="attr_doom"><button type="roll" class="blankroll" title="Report Doom" name="reportdoom" value="!reportdoom GMPANEL"><img src="https://i.imgur.com/J08Xe7w.png" width="22"></button>
        <label>Doom</label>
       <!-- <input type="number" name="attr_GMdifficulty"><label>GM Difficulty</label>
        <input type="number" name="attr_difficulty"><label>Difficulty</label>-->
    </div>
    <div class="combatpanel">
        <input type="number" name="attr_currentround" value="1"><label>Round</label>
        <button type="action" name="act_nextround">Next Round</button><BR>
        <button type="action" name="act_startcombat">Start Combat</button>

    </div>
    <div class="playerpanel">
        <span class="conanheader">Players</span><Br>
        <input type="text" class="talentlabel-5" value="Name">
        <span class="talentlabel-5">Momentum</span> <span class="talentlabel-5">Actions</span>
        <fieldset class="repeating_players">
            <input type="checkbox" name="attr_playeractive" value="1">
            <button type="roll" class="blankroll" value="!addplayer GMPANEL @{selected|character_id} @{rowID}" title="Select a player token (with associated sheet) and click ADD.">+</button>
            <input type="text" class="talentlabel-5" name="attr_playername" value="Click here to initialize." readonly>
            <input type="hidden" name="attr_playerID" value="place holder">
            <input type="hidden" name="attr_rowID" value="place holder" >
           <input type="number" class="talentlabel-5" value=0 name="attr_GMPlayermomentum">
            F<input type="checkbox" name="attr_freeaction" value=1>
            M<input type="checkbox" name="attr_minoraction" value=1>
            S<input type="checkbox" name="attr_standardaction" value=1>
          <!-- <button type="action" name="act_addplayer">SW</button> -->

            <button type="roll" class="blankroll" value="!savemomentum @{playerID} GMPANEL READ" title="Transfer from the player to the party pool.">>></button>
        </fieldset>

        <button type="roll" class="blankroll" value="!readmomentum GMPANEL" title="Check to see if players have momentum."><img src="https://i.imgur.com/ixvmhBJ.png" width="30">Read Momentum</button>
    </div>
    <div class="swordfooter">
        <button type="roll" class="blankroll" value="!init @{character_id}">
            <img src="https://i.imgur.com/GvDDrVy.png" title="initialize Character Attributes.">
        </button>

		<!-- Zero Momentum spends -->
		<!-- Report remaning Momentum -->
		<!-- Zero dice-->
		<!-- Reset talents -->
    </div>
</div>

<!-- Roll Templates -->

<!-- Main Skill & Attribute Template -->

<rolltemplate class="sheet-rolltemplate-conanroll">
    <div class="sheet-conan-container">
        {{#momentumicon}}
                <img src="https://i.imgur.com/ixvmhBJ.png" width="40" height="40" title="Momentum" class="center" style="padding-top: 6px; padding-left:3px">
        {{/momentumicon}}
        <div class="sheet-conan-roll-header">
            {{name}}
        </div>
        <div class="sheet-conan-type">
            {{skill}} vs D{{diff}}
        </div>
        <div class="sheet-conan-dice">
            {{dice}}d20<BR>
            {{#spentmomentum}}    
			<img src="https://i.imgur.com/ixvmhBJ.png" width="20" height="20" title="Momentum"> {{spentmomentum}}
			<img src="https://i.imgur.com/5V9R08u.png" width="30" height="30" title="Doom"> {{doomdice}}
            <img src="https://i.imgur.com/sZW28jM.png" width="30" height="30" title="Fortune"> {{fortunedice}}
            {{/spentmomentum}}
        </div>
        <div class="conan-roll-result">
            {{rolls}}<br>
        </div>
        {{#SUCCEED}}
        <div class="sheet-conan-success">
            SUCCESS<br>
        </div>
        {{/SUCCEED}}
        {{#FAIL}}
        <div class="sheet-conan-fail">
            FAILURE<br>
        </div>
        {{/FAIL}}

        <div class="conan-roll-result">
            {{#fortune}}
            Dice: {{result}} 
            + Fortune: {{fortune}}<BR>
            {{/fortune}}
            Total: {{tsuccess}}<BR>
            {{#genmom}}
            Momentum: {{genmom}}<BR>
            {{/genmom}}
            Complications: {{complications}}<BR>
            {{#button}}
            {{button}}
            {{/button}}
        </div>
    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-conantalent">
    <div class="sheet-conan-talent-container">
        <div class="sheet-conan-talent-header">
			{{name}}<BR><BR>
        </div>
        <div class="sheet-conan-talent-name">
            {{talent}}
        </div>
        <div class="sheet-conan-talent-cost">
            {{#rank}}
            Rank: {{rank}} &
            {{/rank}}
            Cost: {{cost}}
        </div>
        <div class="sheet-conan-talent-desc">
            {{desc}}<br>
            {{button}}
        </div>
    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-CDroll">
    <div class="sheet-CD-container">
	<BR><BR><BR><BR>
        <div class="sheet-CD-roll-header">
				{{name}}
        </div>

        <div class="sheet-CD-type">
            {{#weapon}}
            <b>{{weapon}}</b><br>
            {{/weapon}}
            {{#damagename}}
            {{damagename}}
            {{/damagename}}
            {{effects}}
        </div>
        <div class="sheet-CD-dice">
            Base: {{basedice}} + Bonus: {{bonusdice}}<br>
            Extra: {{extradice}} + Loads: {{loadbonus}}<br>
            Total CD: {{totaldice}}<br>


        </div>
        <div class="sheet-CD-roll-header">

            <br>
			{{result}}<BR>
        </div>
		<div class="sheet-CD-smalltext">
		            Hover for number of Effects<BR>
        </div>
        <div class="sheet-CD-type">
            {{location}}<br>
            {{#loads}}
            used {{loads}} load(s)
            {{/loads}}
        </div>
    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-momentumspend">
    <div class="sheet-momentum-container">
        <BR><BR><BR><BR>
        <div class="sheet-momentum-header">
            {{name}}
        </div>
        <div class="sheet-momentum-spent">
            {{#spend_name}}
            {{spend_name}}<BR>
            {{/spend_name}}    
        </div>
        <div class="sheet-momentum-amount">
             - {{spend_cost}} -
        </div>
        <div class="sheet-momentum-smalltext">
        </div>

    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-cover">
    <div class="sheet-cover-container">
        <div class="sheet-cover-header">
            {{name}}
        </div>
        <div class="sheet-cover-spent">
            {{#spend_name}}
            {{spend_name}}<BR>
            {{/spend_name}}    
        </div>
        <div class="sheet-cover-amount">
             - {{cover}} -
        </div>
        <div class="sheet-cover-smalltext">
        </div>

    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-goldspent">
    <div class="sheet-gold-container">
        <div class="sheet-gold-header">
            {{name}}
        </div>
        <div class="sheet-gold-spent">
            {{#spend_name}}
            {{spend_name}}<BR>
            {{/spend_name}}    
        </div>
        <div class="sheet-gold-amount">
             - {{spend_cost}} -
        </div>
        <div class="sheet-gold-smalltext">
        </div>

    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-doompool">
    <div class="sheet-doompool-container">
        <div class="sheet-doompool-header">
             {{header}}
        </div>
        <div class="sheet-doompool-total">
            <BR>
            {{doom}}   
        </div>
    </div>
</rolltemplate>

<rolltemplate class="sheet-rolltemplate-doomspend">
    <div class="sheet-doomspend-container">
        <div class="sheet-doomspend-header">
             {{header}}
        </div>
        <div class="sheet-doomspend-total">
            <BR>
            {{doom}}   
        </div>
    </div>
</rolltemplate>


<!-- Sheet Workers -->

<script type="text/worker">

const buttonlist = ["PC","NPC","GM","PCdetail"];
const harmupdate=["totaltrauma","totalwounds","currentskillname","currenttype"];
const physharms =["wound1","wound2","wound3","wound4","wound5","Hwound1","Hwound2","Hwound3","Hwound4","Hwound5"];
const mentharms =["trauma1","trauma2","trauma3","trauma4","trauma5","Htrauma1","Htrauma2","Htrauma3","Htrauma4","Htrauma5"];
const fatigueboxes =["fatigue1","fatigue2","fatigue3","fatigue4","fatigue5","fatigue6","fatigue7","fatigue8","fatigue9","fatigue10","fatigue11"];
const fatigueboxvalues =["fatigue1","fatigue2","fatigue3","fatigue4","fatigue5","fatigue6","fatigue7","fatigue8","fatigue9","fatigue10","fatigue11","brawn","resistance_exp","maxvigor"];
const despairboxes =["despair1","despair2","despair3","despair4","despair5","despair6","despair7","despair8","despair9","despair10","despair11"];
const despairboxvalues =["despair1","despair2","despair3","despair4","despair5","despair6","despair7","despair8","despair9","despair10","despair11","willpower","discipline_exp","maxresolve"];

const damagebonus =["brawn","coordination","personality"];
const skills = ["Acrobatics","Alchemy","Animal_Handling","Athletics","Command","Craft","Counsel","Discipline","Healing","Insight","Linguistics","Lore","Melee","Observation","Parry","Persuade","Ranged_Weapons","Resistance","Sailing","Society","Sorcery","Stealth","Survival","Thievery","Warfare"];
const npcexpertise =["Combat","Movement","Senses","Knowledge","Social","Fortitude"];
const attributes =["Agility","Awareness","Intelligence","Willpower","Brawn","Coordination","Personality"];
const mentalskills=["Alchemy","Animal_Handling","Command","Counsel","Craft","Discipline","Healing","Linguistics","Lore","Observation","Persuade","Society","Sorcery","Warfare","Social","Knowledge","Senses"];
const fortunebuttons=["addlucky20","subtractlucky20","recoverfortunevigor","recoverfortuneresolve","ignorewounds","ignoretrauma","secondaction"];
const maxstress=["brawn","resistance_exp","willpower","discipline_exp"];
const stressrecover=["resetstress"];

buttonlist.forEach(button => {
    on(`clicked:${button}`, function() {
        setAttrs({
            sheetTab: button
        });
    });
});
on("change:repeating_players:playername", function() {
    getAttrs(["repeating_players_playeractive"], function(values){
        var init=parseInt(values.repeating_players_playeractive)||0;
        if (init == 0){
            console.log("Initializing Row....");
            getSectionIDs("players", function(IDArray) {
                var fieldNames = [];
                var activename =[];
                var rowid=[];
                var playerid=[];
                var playername=[];
                var playermom=[];
                console.log("Array Length "+IDArray.length);
                for (var i=0; i < IDArray.length; i++) {
                    fieldNames.push("repeating_players_" + IDArray[i] + "_rowID");
                    activename.push("repeating_players_" + IDArray[i] + "_playeractive");
                    playerid.push("repeating_players_" + IDArray[i] + "_playerID");
                    playername.push("repeating_players_" + IDArray[i] + "_playername");
                    playermom.push("repeating_players_" + IDArray[i] + "_GMPlayermomentum");
                    rowid.push(IDArray[i]);
                }
                console.log(fieldNames[IDArray.length-1]);
                setAttrs({
                    [fieldNames[IDArray.length-1]]:rowid[IDArray.length-1],
                    [activename[IDArray.length-1]]:"1",
                    [playerid[IDArray.length-1]]:"Initialized",
                    [playermom[IDArray.length-1]]:"0",
                    [playername[IDArray.length-1]]:"Ready..."
                });
            });
        } else {
            console.log("Already Initalized....");
        }
    });
});

on("change:repeating_equipment:equipmentweight change:repeating_equipment:equipmentqty", function() {
	getSectionIDs("equipment", function(IDArray) {
		var fieldNames = [];
        for (var i=0; i < IDArray.length; i++) {
            fieldNames.push("repeating_equipment_" + IDArray[i] + "_equipmentweight");
            fieldNames.push("repeating_equipment_" + IDArray[i] + "_equipmentqty");
        }
        
        var total = 0;
        var eq=0;
        var qt=0;

        getAttrs(fieldNames, function(values) {
			for (var i=0; i < IDArray.length; i++) {
                eq=parseInt(values["repeating_equipment_" + IDArray[i] + "_equipmentweight"])||0;
                qt=parseInt(values["repeating_equipment_" + IDArray[i] + "_equipmentqty"])||0;
				total += eq*qt;
            }
			setAttrs({
				carriedweight: total
			});
        });
	});
});

on("change:npcwounds", function(){
    getAttrs(["npcwounds"], function(values){
        var wounds=parseInt(values.npcwounds)||0;
        if (wounds<2) {
            setAttrs({
                npcbase_dice:1
            });
        } else {
            setAttrs({
                npcbase_dice:2
            });
        }
    });
});

maxstress.forEach(maxup => {
    on(`change:${maxup}`, function() {
        getAttrs(["brawn","resistance_exp","willpower","discipline_exp"], function(values){
            var brawnv=parseInt(values.brawn)||0;
            var resistv=parseInt(values.resistance_exp)||0;
            var willpowerv=parseInt(values.willpower)||0;
            var disciplinev=parseInt(values.discipline_exp)||0;
            var mr=willpowerv+disciplinev;
            var mv=brawnv+resistv;
            setAttrs({
               maxresolve:mr,
               maxvigor:mv
            });
        });
    });
});

attributes.forEach(button => {
    on(`clicked:${button}`, function(){
        getAttrs([button,"currentFC"], function(values){
            var attrib=parseInt(values[button])||0;
            var FC=parseInt(values.currentFC)||0;
            var TN=attrib+FC;
            setAttrs({
                currentattribute:attrib,
                currentattributename:button,
                currentTN:TN
            });
        });
    });
});

npcexpertise.forEach(button => {
    on(`clicked:${button}`, function(){
        getAttrs([button,"currentattribute","totalwounds","totaltrauma"], function(values){
            var exp=parseInt(values[button])||0;
            var attrib=parseInt(values.currentattribute)||0;
            var TN=attrib+exp;
            var tt=values.totaltrauma;
            var tw=values.totalwounds;
            console.log("Button: "+button);
            if (mentalskills.includes(button)) {
                var ch=tt;
                var ct="Mental";
            } else {
                var ch=tw;
                var ct="Physical";
            }
            setAttrs({
                currentFC:exp,
                currentTN:TN,
                currentskillname:button,
                currentharm:ch,
                currenttype:ct
            });
        });
    });
});

stressrecover.forEach(button =>{
    on(`clicked:${button}`, function(){
        switch(button){
            case "resetstress":
                getAttrs(["maxresolve","maxvigor","totalfatigue","totaldespair"], function(values){
                    var maxv=parseInt(values.maxvigor)||0;
                    var maxr=parseInt(values.maxresolve)||0;
                    var tf=parseInt(values.totalfatigue)||0;
                    var td=parseInt(values.totaldespair)||0;
                    setAttrs({
                        vigor_current:maxv,
                        resolve_current:maxr
                    })
                })
            break;
        }
    });
});

fortunebuttons.forEach(button =>{
	on(`clicked:${button}`, function(){
        switch(button){
            case "secondaction":
                getAttrs(["fortune"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    if (fort-1>=0){
                        fort=fort-1;
                        setAttrs({
                            fortune:fort
                        });
                    }
                });
            break;
            case "addlucky20":
                getAttrs(["fortune","d20momentum","d20fortune","d20doom","d20exception"], function(values){
                    var d20fort=parseInt(values.d20fortune)||0;
                    var d20mom=parseInt(values.d20momentum)||0;
                    var d20doom=parseInt(values.d20doom)||0;
                    var d20excp=parseInt(values.d20exception)||0;
                    var fort=parseInt(values.fortune)||0;

                    var totald20=d20fort+d20doom+d20mom+d20excp;

                    if ((totald20+1<=3) && (fort-1>=0)){
                        fort=fort-1;
                        d20fort=d20fort+1;
                        setAttrs({
                            fortune:fort,
                            d20fortune:d20fort
                        });
                    } 
                });
            break;
            case "subtractlucky20":
                getAttrs(["fortune","d20fortune"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    var d20fort=parseInt(values.d20fortune)||0;
                    if (d20fort-1>=0){
                        fort=fort+1;
                        d20fort=d20fort-1;
                        setAttrs({
                            Fortune:fort,
                            d20fortune:d20fort
                        });
                    }
                });
            break;
            case "ignorewounds":
                getAttrs(["fortune"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    var ig=1;
                    if (fort-1>=0){
                        fort=fort-1;
                        setAttrs({
                            ignorewounds:ig,
                            fortune:fort
                        });
                    }
                });
            break;
            case "ignoretrauma":
                getAttrs(["fortune"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    var ig=1;
                    if (fort-1>=0){
                        fort=fort-1;
                        setAttrs({
                            ignoretrauma:ig,
                            fortune:fort
                        });
                    }
                });
            break;
            case "recoverfortunevigor":
                getAttrs(["fortune","brawn","resistance_exp","totalfatigue"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    var brwn=parseInt(values.brawn)||0;
                    var rest=parseInt(values.resistance_exp)||0;
                    var tf=parseInt(values.totalfatigue)||0;
                    var maxv=brwn+rest-tf;
                    if (fort-1>=0){
                        fort=fort-1;
                        setAttrs({
                            fortune: fort,
                            vigor_current:maxv
                        });
                    }
                });
            break;
            case "recoverfortuneresolve":
                getAttrs(["fortune","willpower","discipline_exp","totaldespair"], function(values){
                    var fort=parseInt(values.fortune)||0;
                    var will=parseInt(values.willpower)||0;
                    var disc=parseInt(values.discipline_exp)||0;
                    var td=parseInt(values.totaldespair)||0;
                    var maxr=will+disc-td;
                    if (fort-1>=0){
                        fort=fort-1;
                        setAttrs({
                            fortune: fort,
                            resolve_current:maxr
                        });
                    }
                });
            break;
        }
    });
});

harmupdate.forEach(harmup => {
	on(`change:${harmup}`, function(){
		getAttrs(["totaltrauma","totalwounds","currenttype"], function(values){
			var ctype=values.currenttype;
			var ttrauma=values.totaltrauma;
			var twounds=values.totalwounds;
			var sh=0;
			if (ctype=="Physical"){
				sh=twounds;
			} else {
				sh=ttrauma;
			}
			setAttrs({
				currentharm:sh
			});
		});
	});
});

physharms.forEach(physical_harm => {
    on(`change:${physical_harm}`, function() {
        getAttrs(physharms, function(values){
            var w1=parseInt(values.wound1)||0;
            var w2=parseInt(values.wound2)||0;
            var w3=parseInt(values.wound3)||0;
            var w4=parseInt(values.wound4)||0;
            var w5=parseInt(values.wound5)||0;
            var hw1=parseInt(values.Hwound1)||0;
            var hw2=parseInt(values.Hwound2)||0;
            var hw3=parseInt(values.Hwound3)||0;
            var hw4=parseInt(values.Hwound4)||0;
            var hw5=parseInt(values.Hwound5)||0;
            var tw=w1+w2+w3+w4+w5-hw1-hw2-hw3-hw4-hw5;
            if (tw<=0){
                tw=0;
            }
            setAttrs({
                totalwounds:tw
            });
        });    
    });
});

mentharms.forEach(mental_harm => {
    on(`change:${mental_harm}`, function() {
        getAttrs(mentharms, function(values){
            var t1=parseInt(values.trauma1)||0;
            var t2=parseInt(values.trauma2)||0;
            var t3=parseInt(values.trauma3)||0;
            var t4=parseInt(values.trauma4)||0;
            var t5=parseInt(values.trauma5)||0;
            var ht1=parseInt(values.Htrauma1)||0;
            var ht2=parseInt(values.Htrauma2)||0;
            var ht3=parseInt(values.Htrauma3)||0;
            var ht4=parseInt(values.Htrauma4)||0;
            var ht5=parseInt(values.Htrauma5)||0;
            var tt=t1+t2+t3+t4+t5-ht1-ht2-ht3-ht4-ht5;
            if (tt<=0){
                tt=0;
            }
            setAttrs({
                totaltrauma:tt
            });
        });    
    });
});

fatigueboxes.forEach(fatigue_check => {
    on(`change:${fatigue_check}`, function(){
        getAttrs(fatigueboxvalues,function(values){
            var f1=parseInt(values.fatigue1)||0;
            var f2=parseInt(values.fatigue2)||0;
            var f3=parseInt(values.fatigue3)||0;
            var f4=parseInt(values.fatigue4)||0;
            var f5=parseInt(values.fatigue5)||0;
            var f6=parseInt(values.fatigue6)||0;
            var f7=parseInt(values.fatigue7)||0;
            var f8=parseInt(values.fatigue8)||0;
            var f9=parseInt(values.fatigue9)||0;
            var f10=parseInt(values.fatigue10)||0;
            var f11=parseInt(values.fatigue11)||0;
            var brwn=parseInt(values.brawn)||0;
            var rest=parseInt(values.resistance_exp)||0;
            var tf=f1+f2+f3+f4+f5+f6+f7+f8+f9+f10+f11;
            if (tf<=0){
                tf=0;
            }
            var maxv=brwn+rest-tf;
            setAttrs({
                totalfatigue:tf,
                maxvigor:maxv
            });
        });
    });
});

despairboxes.forEach(despair_check => {
    on(`change:${despair_check}`, function(){
        getAttrs(despairboxvalues,function(values){
            var d1=parseInt(values.despair1)||0;
            var d2=parseInt(values.despair2)||0;
            var d3=parseInt(values.despair3)||0;
            var d4=parseInt(values.despair4)||0;
            var d5=parseInt(values.despair5)||0;
            var d6=parseInt(values.despair6)||0;
            var d7=parseInt(values.despair7)||0;
            var d8=parseInt(values.despair8)||0;
            var d9=parseInt(values.despair9)||0;
            var d10=parseInt(values.despair10)||0;
            var d11=parseInt(values.despair11)||0;
            var will=parseInt(values.willpower)||0;
            var disc=parseInt(values.discipline_exp)||0;
            var tde=d1+d2+d3+d4+d5+d6+d7+d8+d9+d10+d11;
            if (tde<=0){
                tde=0;
            }
            var maxr=will+disc-tde;
            setAttrs({
                totaldespair:tde,
                maxresolve:maxr
            });
        });
    });
});


damagebonus.forEach(bonus => {
    on(`change:${bonus}`, function() {
        getAttrs([bonus], function(values){
            var bonval=parseInt(values[bonus])||0;
            var dambon=0;
            if (bonval>=16){
                dambon=5;
            } else if (bonval>=14) {
                dambon=4;
            } else if (bonval>=12) {
                dambon=3;
            } else if (bonval>=10) {
                dambon=2;
            } else if (bonval>=9) {
                dambon=1;
            } else {
                dambon=0;
            }
            switch (bonus){
                case "brawn":
                    setAttrs({melee_bonus:dambon});
                break;
                case "awareness":
                    setAttrs({ranged_bonus:dambon});
                break;
                case "personality":
                    setAttrs({threat_bonus:dambon});
                break;
            }
        });
    });
});

skills.forEach(button => {
    on(`clicked:${button}`, function(){
        console.log("use: "+button);
        setAttrs({
            currentskillname:button
        });
    });;
});

on("clicked:nextround", function(){
    console.log("ONE!");
    getSectionIDs("players", function(IDArray) {
        var free = [];
        var minor = [];
        var standard = [];
        for (var i=0; i < IDArray.length; i++) {
            free.push("repeating_players_" + IDArray[i] + "_freeaction");
            minor.push("repeating_players_" + IDArray[i] + "_minoraction");
            standard.push("repeating_players_" + IDArray[i] + "_standardaction");
        }
        console.log("TWO!");
        var attrib;
        for (var i=0;i<IDArray.length;i++){   // Not the best way to handle this, but couldn't come up with a different solution.
            setAttrs({
                [free[i]]:0,
                [minor[i]]:0,
                [standard[i]]:0
            });
        }
        console.log(free);
    });
    getAttrs(["currentround","momentum"], function(values){

        var rnd=parseInt(values.currentround)||0;
        var mom=parseInt(values.momentum)||0;
        rnd=rnd+1;
        mom=mom-1;
        if (mom<=0){
            mom=0;
        }
        setAttrs({
            currentround:rnd,
            momentum:mom
        });
    });
});

on("clicked:startcombat", function() {
    var rnd=1;
    setAttrs({
            currentround:rnd
    });
});

on("clicked:d0", function(){
    setAttrs({
        difficulty:0
    });
});
on("clicked:d1", function(){
    setAttrs({
        difficulty:1
    });
});
on("clicked:d2", function(){
    setAttrs({
        difficulty:2
    });
});
on("clicked:d3", function(){
    setAttrs({
        difficulty:3
    });
});
on("clicked:d4", function(){
    setAttrs({
        difficulty:4
    });
});
on("clicked:d5", function(){
    setAttrs({
        difficulty:5
    });
});

on("clicked:adddie_momentum",function () {
    console.log("add momentum");
    getAttrs(["d20momentum","d20doom","d20fortune","momentum","bloodonsteel","spentmom","d20exception"],function(values){
        var dieM=parseInt(values.d20momentum)||0;
        var dieD=parseInt(values.d20doom)||0;
        var dieF=parseInt(values.d20fortune)||0;
        var dieE=parseInt(values.d20exception)||0;
        var mom=parseInt(values.momentum)||0;
		var bos=parseInt(values.bloodonsteel)||0;
		var spmom=parseInt(values.spentmom)||0;
				
        var totalDice=2+dieM+dieD+dieF+dieE;
		var diepermom=1;
		
		if (bos==1){
			diepermom=2;
        }
         
        if (totalDice+diepermom<=5){
            if (mom-1>=0){
                dieM=dieM+diepermom;
				spmom=spmom+1;
                mom=mom-1;
                setAttrs({
					spentmom: spmom,
                    d20momentum:dieM,
                    momentum:mom
                });
            }
        }        
    });
});

on("clicked:subtractdie_momentum",function () {
    getAttrs(["d20momentum","momentum","bloodonsteel","spentmom"],function(values){
        var dieM=parseInt(values.d20momentum)||0;
        var mom=parseInt(values.momentum)||0;
		var bos=parseInt(values.bloodonsteel)||0;
		var spmom=parseInt(values.spentmom)||0;
		
		var diepermom=1;
		if (bos==1){
			diepermom=2;
		}
		
        if (dieM-diepermom>=0){
            dieM=dieM-diepermom;
			spmom=spmom-1;
			var mom=mom+1;
            setAttrs({
				spentmom: spmom,
                d20momentum:dieM,
                momentum:mom
            });
        }
    });
});

on("change:GMdifficulty", function() {  
    getAttrs(["GMdifficulty"],function(values){
        var dif=parseInt(values.GMdifficulty)||0;
        setAttrs({
            difficulty:dif
        });
    });
});

on("clicked:adddie_doom",function() {
    getAttrs(["d20momentum","d20doom","d20fortune","d20exception"],function(values){
        var dieM=parseInt(values.d20momentum)||0;
        var dieD=parseInt(values.d20doom)||0;
        var dieF=parseInt(values.d20fortune)||0;
        var dieE=parseInt(values.d20exception)||0;
        var totalDice=2+dieM+dieD+dieF+dieE;
        if (totalDice+1<=5){
            dieD=dieD+1;
            setAttrs({
                d20doom:dieD
            });
        }        
    });
});

on("clicked:subtractdie_doom",function () {
    getAttrs(["d20doom"],function(values){
        let dieD=parseInt(values.d20doom)||0;
        if (dieD-1>=0){
            dieD=dieD-1;
            setAttrs({
                d20doom:dieD
            });
        }
    });
});

on("clicked:add20",function() {
    getAttrs(["d20momentum","d20doom","d20fortune","d20exception"],function(values){
        var dieM=parseInt(values.d20momentum)||0;
        var dieD=parseInt(values.d20doom)||0;
        var dieF=parseInt(values.d20fortune)||0;
        var dieE=parseInt(values.d20exception)||0;
        var totalDice=2+dieM+dieD+dieF+dieE;
        if (totalDice+1<=5){
            dieE=dieE+1;
            setAttrs({
                d20exception:dieE
            });
        }        
    });
});

on("clicked:subtract20",function () {
    getAttrs(["d20exception"],function(values){
        let dieE=parseInt(values.d20exception)||0;
        if (dieE-1>=0){
            dieE=dieE-1;
            setAttrs({
                d20exception:dieE
            });
        }
    });
});

on("clicked:cleardice", function() {
    let zero=0;
    getAttrs(["d20momentum","momentum","d20fortune","fortune","spentmom","d20exception","loadbonus"], function(values) {
        var d20mom=parseInt(values.d20momentum)||0;
		var spmom=parseInt(values.spentmom)||0;
        var mom=parseInt(values.momentum)||0;
		var fort=parseInt(values.fortune)||0;
		var d20fort=parseInt(values.d20fortune)||0;
        var d20excep=parseInt(values.d20exception)||0;
		fort=fort+d20fort;
        mom=mom+spmom;
        setAttrs({
			spentmom:zero,
            d20doom:zero,
            d20momentum:zero,
            d20fortune:zero,
			fortune:fort,
            d20exception:zero,
            momentum:mom,
            loadbonus:zero,
        });
    });
    
});

on("clicked:repeating_equipment:equip", function(eventInfo) {
    getAttrs(["repeating_equipment_equbonus","equipedbonus"], function(values){
        let newbonus=parseInt(values.repeating_equipment_equbonus)||0;
        let bonus=parseInt(values.equipedbonus)||0;
        setAttrs({
            "equipedbonus": newbonus+bonus
        });
    });
});

on("clicked:repeating_weapons:load",function () {
    console.log("Add Load");
    getAttrs(["d20momentum","d20doom","d20fortune","d20exception","loadbonus","repeating_weapons_totalloads"],function(values){
        var dieM=parseInt(values.d20momentum)||0;
        var dieD=parseInt(values.d20doom)||0;
        var dieF=parseInt(values.d20fortune)||0;
        var dieE=parseInt(values.d20exception)||0;
        var cdbon=parseInt(values.loadbonus)||0;
        var ttlloads=parseInt(values.repeating_weapons_totalloads)||0;

        var totalDice=2+dieM+dieD+dieF+dieE;
        var diepermom=1;

        console.log("TD: "+totalDice);
        console.log("Total loads: "+ttlloads);
        console.log("Load bonus:" +cdbon);

        if (totalDice+diepermom<=5 && ttlloads-1>=0){
            dieE=dieE+1;
            cdbon=cdbon+1;
            ttlloads=ttlloads-1;
            if (ttlloads<0) {
                ttlloads=0;
            }
            for(i=0;i<ttlloads;i++){
                console.log("check: "+i);
            }
            setAttrs({
                d20exception:dieE,
                repeating_weapons_totalloads:ttlloads,
                loadbonus:cdbon
            });
        }
    });
});

</script>