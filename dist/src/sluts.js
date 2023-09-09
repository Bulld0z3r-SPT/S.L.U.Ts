/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
class Sluts {
    postDBLoad(container) {
        const jsonUtil = container.resolve("JsonUtil");
        const logger = container.resolve("WinstonLogger");
        const db = container.resolve("DatabaseServer").getTables();
        this.pkg = require("../package.json");
        const config = require("./config.json");

        const handbook = db.templates.handbook;
        const locales = Object.values(db.locales.global);

        logger.log(`[${this.pkg.name}] Loaded v${this.pkg.version} for AKI v${this.pkg.akiVersion}! Made by ${this.pkg.author}.`, "cyan");
        const trader = db.traders["54cb57776803fa99248b456e"];

        // Special Slots ID
        const SpecialSlots = db.templates.items["627a4e6b255f7527fb05a0f6"];

        // #region SuperPropital Stim
        const SuperPropitalStim = require("../db/buffs/Sluts_SuperPropital.json");

        const SuperPropitalStimId = "Sluts_SuperPropital",
            SuperPropitalStimCategory = "5b47574386f77428ca22b33a",
            SuperPropitalStimFleaPrice = 136969,
            SuperPropitalStimName = "Stimulant Injector S.L.U.Ts-SuperPropital",
            SuperPropitalStimShortName = "SuperPropital",
            SuperPropitalStimDescription = "Manufactured by the S.L.U.Ts company. \"SuperPropital\" aka \"Propital 2.0\" is an upgraded version of the combat revitalization stimulant injector that restores health and stamina, stops bleeding (which didn't work in the original) and shortly stops pain. \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            SuperPropitalStimTraderPrice = 136969;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_SuperPropital"] = SuperPropitalStim;
        
        const itemSuperPropitalStim = jsonUtil.clone(db.templates.items["5c0e530286f7747fa1419862"]);

        Sluts.addStimData(
            itemSuperPropitalStim,
            SuperPropitalStimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_propital_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_propital_container.bundle",
            config.StimUseCount,
            "Sluts_SuperPropital");
        itemSuperPropitalStim._props.effects_damage = {
            "Pain": {
                "delay": 0,
                "duration": 60,
                "fadeOut": 5
            }
        };

        db.templates.items[SuperPropitalStimId] = itemSuperPropitalStim;

        Sluts.addLocales(locales, SuperPropitalStimId, SuperPropitalStimName, SuperPropitalStimShortName, SuperPropitalStimDescription);
        Sluts.addHandbookItem(handbook, SuperPropitalStimId, SuperPropitalStimCategory, SuperPropitalStimFleaPrice);
        Sluts.addStimToTrader(trader, SuperPropitalStimId, SuperPropitalStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(SuperPropitalStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, SuperPropitalStimId);
        // #endregion    

        // #region SJ69 Stim
        const SJ69Stim = require("../db/buffs/Sluts_SJ69.json");

        const SJ69StimId = "Sluts_SJ69",
            SJ69StimCategory = "5b47574386f77428ca22b33a",
            SJ69StimFleaPrice = 129969,
            SJ69StimName = "Stimulant Injector S.L.U.Ts-SJ69",
            SJ69StimShortName = "SJ69",
            SJ69StimDescription = "SJ69 is a TOP SECRET combat stimulant. It is used to increase the body abilities before combat. Stimulant is allowed to use only by the secret special forces units and is barely legal. \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies\n\nNote from S.L.U.Ts employee PDA:\n\"Russia was banned from international sports in 2015 for running a state-sponsored doping program. The report found that 1,400 test results were destroyed and recommended lifetime bans for five long-distance runners.\" - probably smuggled our stimulant into the olympics",
            SJ69StimTraderPrice = 129969;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_SJ69"] = SJ69Stim;
        
        const itemSJ69Stim = jsonUtil.clone(db.templates.items["5fca13ca637ee0341a484f46"]);

        Sluts.addStimData(
            itemSJ69Stim,
            SJ69StimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_sj9_tglabs_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_sj9_tglabs_container.bundle",
            config.StimUseCount,
            "Sluts_SJ69");

        db.templates.items[SJ69StimId] = itemSJ69Stim;

        Sluts.addLocales(locales, SJ69StimId, SJ69StimName, SJ69StimShortName, SJ69StimDescription);
        Sluts.addHandbookItem(handbook, SJ69StimId, SJ69StimCategory, SJ69StimFleaPrice);
        Sluts.addStimToTrader(trader, SJ69StimId, SJ69StimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(SJ69StimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, SJ69StimId);
        // #endregion 
        
        // #region GSPOT Stim
        const GSPOTStim = require("../db/buffs/Sluts_GSPOT.json");

        const GSPOTStimId = "Sluts_GSPOT",
            GSPOTStimCategory = "5b47574386f77428ca22b33a",
            GSPOTStimFleaPrice = 169969,
            GSPOTStimName = "Stimulant Injector S.L.U.Ts-G.S.P.O.T",
            GSPOTStimShortName = "G.S.P.O.T",
            GSPOTStimDescription = "Graravity Strenght Power Oriented Trigger stimulant is a product of experimentation with the legendary M.U.L.E stimulant with an addition of viagra ingredients. commonly used by the military workers to overcome the pain of lifting heavy equipment without an ExoSkeleton. Testimonials say \"It's almost like weaing an ExoSkeleton, but much cheaper.\" \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            GSPOTStimTraderPrice = 169969;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_GSPOT"] = GSPOTStim;
        
        const itemGSPOTStim = jsonUtil.clone(db.templates.items["5ed51652f6c34d2cc26336a1"]);

        Sluts.addStimData(
            itemGSPOTStim,
            GSPOTStimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_mule_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_mule_container.bundle",
            config.StimUseCount,
            "Sluts_GSPOT");

        itemSuperPropitalStim._props.effects_damage = {
            "Pain": {
                "delay": 0,
                "duration": 10,
                "fadeOut": 5
            }
        };

        db.templates.items[GSPOTStimId] = itemGSPOTStim;

        Sluts.addLocales(locales, GSPOTStimId, GSPOTStimName, GSPOTStimShortName, GSPOTStimDescription);
        Sluts.addHandbookItem(handbook, GSPOTStimId, GSPOTStimCategory, GSPOTStimFleaPrice);
        Sluts.addStimToTrader(trader, GSPOTStimId, GSPOTStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(GSPOTStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, GSPOTStimId);
        // #endregion
        
        // #region F.A.P(S) Stim
        const FAPSStim = require("../db/buffs/Sluts_FAPS.json");

        const FAPSStimId = "Sluts_FAPS",
            FAPSStimCategory = "5b47574386f77428ca22b33a",
            FAPSStimFleaPrice = 69420,
            FAPSStimName = "Stimulant Injector S.L.U.Ts-F.A.P(S)",
            FAPSStimShortName = "F.A.P(S)",
            FAPSStimDescription = "Fierce Adrenaline Power (Short) - This injector delivers a large dose of epinephrine, which narrows the blood vessels to increase blood pressure and opens the airways to enable normal breathing. but is also used to enhance the physiological response associated with the preparation of all muscles to increased activity. Temporarily boosts strength, endurance, attention and perception. basically feel like a super human. \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            FAPSStimTraderPrice = 69420;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_FAPS"] = FAPSStim;
        
        const itemFAPSStim = jsonUtil.clone(db.templates.items["5c10c8fd86f7743d7d706df3"]);

        Sluts.addStimData(
            itemFAPSStim,
            FAPSStimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_adrenaline_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_adrenaline_container.bundle",
            config.StimUseCount,
            "Sluts_FAPS");

        db.templates.items[FAPSStimId] = itemFAPSStim;

        Sluts.addLocales(locales, FAPSStimId, FAPSStimName, FAPSStimShortName, FAPSStimDescription);
        Sluts.addHandbookItem(handbook, FAPSStimId, FAPSStimCategory, FAPSStimFleaPrice);
        Sluts.addStimToTrader(trader, FAPSStimId, FAPSStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(FAPSStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, FAPSStimId);
        // #endregion

        // #region F.A.P(L) Stim
        const FAPLStim = require("../db/buffs/Sluts_FAPL.json");

        const FAPLStimId = "Sluts_FAPL",
            FAPLStimCategory = "5b47574386f77428ca22b33a",
            FAPLStimFleaPrice = 269420,
            FAPLStimName = "Stimulant Injector S.L.U.Ts-F.A.P(L)",
            FAPLStimShortName = "F.A.P(L)",
            FAPLStimDescription = "Fierce Adrenaline Power (Long) - This injector delivers a large dose of epinephrine, which narrows the blood vessels to increase blood pressure and opens the airways to enable normal breathing. but is also used to enhance the physiological response associated with the preparation of all muscles to increased activity. Temporarily boosts strength, endurance, attention and perception. basically feel like a super human. \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            FAPLStimTraderPrice = 269420;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_FAPL"] = FAPLStim;
        
        const itemFAPLStim = jsonUtil.clone(db.templates.items["5c10c8fd86f7743d7d706df3"]);

        Sluts.addStimData(
            itemFAPLStim,
            FAPLStimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_adrenaline_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_adrenaline_container.bundle",
            config.StimUseCount,
            "Sluts_FAPL");

        db.templates.items[FAPLStimId] = itemFAPLStim;

        Sluts.addLocales(locales, FAPLStimId, FAPLStimName, FAPLStimShortName, FAPLStimDescription);
        Sluts.addHandbookItem(handbook, FAPLStimId, FAPLStimCategory, FAPLStimFleaPrice);
        Sluts.addStimToTrader(trader, FAPLStimId, FAPLStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(FAPLStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, FAPLStimId);
        // #endregion
        
        // #region S.L.I.T Stim
        const slitStim_effects_damage = require("../db/effects_damage/Sluts_SLIT.json");

        const slitStimId = "Sluts_SLIT",
            slitStimCategory = "5b47574386f77428ca22b33a",
            slitStimFleaPrice = 42069,
            slitStimName = "Stimulant Injector S.L.U.Ts-S.L.I.T",
            slitStimShortName = "S.L.I.T",
            slitStimDescription = "Skin & Limbs Injury Treatment stim is part of our new products line, allowing for a quick and easy treatment of life treathening injuries. basically a super glue for your skin and bones. \nSIDE EFFECTS: wound can become itchy after use. DO NOT SCRATCH the wound! but only gently massage the hole. \nthis product was originally designed for use by the military on the frontlines. but, as more and more Hospital Emergency Rooms found it very useful. it helped bring its prices down and make it highly available to the wide public. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            slitStimTraderPrice = 42069;
        
        const itemslitStim = jsonUtil.clone(db.templates.items["5d02797c86f774203f38e30a"]);

        Sluts.addStimData(
            itemslitStim,
            slitStimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_obdolbos2_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_obdolbos2_container.bundle",
            config.StimUseCount,
            "");

        itemslitStim._props.effects_damage = slitStim_effects_damage;
        itemslitStim._props.ItemSound = "med_stimulator";
        itemslitStim._props.Weight = 0.05;
        itemslitStim._props.Width = 1;
        itemslitStim._props.Height = 1;
        itemslitStim._props.medUseTime = 2;
        itemslitStim._props.medEffectType = "afterUse";

        db.templates.items[slitStimId] = itemslitStim;

        Sluts.addLocales(locales, slitStimId, slitStimName, slitStimShortName, slitStimDescription);
        Sluts.addHandbookItem(handbook, slitStimId, slitStimCategory, slitStimFleaPrice);
        Sluts.addStimToTrader(trader, slitStimId, slitStimTraderPrice, 100, 4);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(slitStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, slitStimId);
        // #endregion

        // #region RnD-HTD Tabs.
        const RnDHTDStim = require("../db/buffs/Sluts_RnD-HTD.json");

        const RnDHTDStimId = "Sluts_RnD-HTD",
            RnDHTDStimCategory = "5b47574386f77428ca22b337",
            RnDHTDStimFleaPrice = 19999,
            RnDHTDStimName = "S.L.U.Ts-RnD-HTD Tablets",
            RnDHTDStimShortName = "RnD-H.T.D",
            RnDHTDStimDescription = "Hands Tremor Disorder tablets. NOT FOR SALE! INTERNAL USE ONLY! \nS.L.U.Ts Reasearh and Development department. \nManufactured by the S.L.U.Ts company. ",
            RnDHTDStimTraderPrice = 19999;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_RnD-HTD"] = RnDHTDStim;
        
        const itemRnDHTDStim = jsonUtil.clone(db.templates.items["544fb37f4bdc2dee738b4567"]);

        Sluts.addStimData(
            itemRnDHTDStim,
            RnDHTDStimId,
            "assets/content/weapons/usable_items/item_blister/item_analgin_loot.bundle",
            "assets/content/weapons/usable_items/item_blister/item_analgin_container.bundle",
            config.TabsUseCount,
            "Sluts_RnD-HTD");

        db.templates.items[RnDHTDStimId] = itemRnDHTDStim;

        Sluts.addLocales(locales, RnDHTDStimId, RnDHTDStimName, RnDHTDStimShortName, RnDHTDStimDescription);
        Sluts.addHandbookItem(handbook, RnDHTDStimId, RnDHTDStimCategory, RnDHTDStimFleaPrice);
        Sluts.addStimToTrader(trader, RnDHTDStimId, RnDHTDStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(RnDHTDStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, RnDHTDStimId);
        // #endregion
        
        // #region RnD-CE Tabs.
        const RnDCEStim = require("../db/buffs/Sluts_RnD-CE.json");

        const RnDCEStimId = "Sluts_RnD-CE",
            RnDCEStimCategory = "5b47574386f77428ca22b337",
            RnDCEStimFleaPrice = 19999,
            RnDCEStimName = "S.L.U.Ts-RnD-CE Tablets",
            RnDCEStimShortName = "RnD-CE",
            RnDCEStimDescription = "Contusion Effect tablets. NOT FOR SALE! INTERNAL USE ONLY! \nS.L.U.Ts Reasearh and Development department. \nManufactured by the S.L.U.Ts company. ",
            RnDCEStimTraderPrice = 19999;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_RnD-CE"] = RnDCEStim;
        
        const itemRnDCEStim = jsonUtil.clone(db.templates.items["544fb37f4bdc2dee738b4567"]);

        Sluts.addStimData(
            itemRnDCEStim,
            RnDCEStimId,
            "assets/content/weapons/usable_items/item_blister/item_analgin_loot.bundle",
            "assets/content/weapons/usable_items/item_blister/item_analgin_container.bundle",
            config.TabsUseCount,
            "Sluts_RnD-CE");

        db.templates.items[RnDCEStimId] = itemRnDCEStim;

        Sluts.addLocales(locales, RnDCEStimId, RnDCEStimName, RnDCEStimShortName, RnDCEStimDescription);
        Sluts.addHandbookItem(handbook, RnDCEStimId, RnDCEStimCategory, RnDCEStimFleaPrice);
        Sluts.addStimToTrader(trader, RnDCEStimId, RnDCEStimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(RnDCEStimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, RnDCEStimId);
        // #endregion

        // #region SJ420 Stim
        const SJ420Stim = require("../db/buffs/Sluts_SJ420.json");

        const SJ420StimId = "Sluts_SJ420",
            SJ420StimCategory = "5b47574386f77428ca22b33a",
            SJ420StimFleaPrice = 49999,
            SJ420StimName = "Stimulant Injector S.L.U.Ts-SJ420",
            SJ420StimShortName = "SJ420",
            SJ420StimDescription = "SJ420 also known as NERD Stim. This stim inject about a 100 thousand nano robots into your blood. which then rush towards your brain and cling to it. sharing their db of items with it. making you super smart, and able to understand what you see just by the glimpse of it. unfortunately, this effect has limited time and die off as soon the bots loose their battery power. \nsome individuals might experience minor side effects for a short period of time. this product contains drug elements which may be addictive to some individuals. \nS.L.U.Ts company aims at producing high quality Special Life Uplifting Technologies",
            SJ420StimTraderPrice = 49999;

        db.globals.config.Health.Effects.Stimulator.Buffs["Sluts_SJ420"] = SJ420Stim;
        
        const itemSJ420Stim = jsonUtil.clone(db.templates.items["5fca13ca637ee0341a484f46"]);

        Sluts.addStimData(
            itemSJ420Stim,
            SJ420StimId,
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_sj9_tglabs_loot.bundle",
            "assets/content/weapons/usable_items/item_syringe/item_stimulator_sj9_tglabs_container.bundle",
            config.StimUseCount,
            "Sluts_SJ420");

        db.templates.items[SJ420StimId] = itemSJ420Stim;

        Sluts.addLocales(locales, SJ420StimId, SJ420StimName, SJ420StimShortName, SJ420StimDescription);
        Sluts.addHandbookItem(handbook, SJ420StimId, SJ420StimCategory, SJ420StimFleaPrice);
        Sluts.addStimToTrader(trader, SJ420StimId, SJ420StimTraderPrice, 100, 3);
        db.templates.items["619cbf7d23893217ec30b689"]._props.Grids[0]._props.filters[0].Filter.push(SJ420StimId);
        Sluts.addItemToSpecialSlots(SpecialSlots, SJ420StimId);
        // #endregion 
    }

    // Create a method to add a stim to the trader
    static addStimToTrader(trader, stimId, stimPrice, stimCount, stimLoyaltyLevel) {
        trader.assort.items.push({
            "_id": stimId,
            "_tpl": stimId,
            "parentId": "hideout",
            "slotId": "hideout",
            "upd":
            {
                "UnlimitedCount": true,
                "StackObjectsCount": stimCount
            }
        });
        trader.assort.barter_scheme[stimId] = [
            [
                {
                    "count": stimPrice,
                    "_tpl": "5449016a4bdc2d6f028b456f" // roubles
                }
            ]
        ];
        trader.assort.loyal_level_items[stimId] = stimLoyaltyLevel;
    }

    // Create a method to add data buffs, id, prefab path, useprefab path, to a specific item
    static addStimData(stimItem, id, prefabPath, usePrefabPath, maxHpResource, buffs) {
        stimItem._id = id;
        stimItem._props.Prefab.path = prefabPath;
        stimItem._props.UsePrefab.path = usePrefabPath;
        stimItem._props.MaxHpResource = maxHpResource;
        stimItem._props.StimulatorBuffs = buffs;
    }

    // Create a method to add locales for an item
    static addLocales(locales, id, name, shortName, description) {
        for (const locale of locales) {
            locale[`${id} Name`] = name;
            locale[`${id} ShortName`] = shortName;
            locale[`${id} Description`] = description;
        }
    }

    // Create a method to add an item to the handbook
    static addHandbookItem(handbook, id, parentId, price) {
        handbook.Items.push(
            {
                "Id": id,
                "ParentId": parentId,
                "Price": price
            }
        );
    }

    // Add Item to Special Slots
    static addItemToSpecialSlots(specialSlots, item){
        specialSlots._props.Slots[0]._props.filters[0].Filter.push(item);
        specialSlots._props.Slots[1]._props.filters[0].Filter.push(item);
        specialSlots._props.Slots[2]._props.filters[0].Filter.push(item);
    }
}

module.exports = {
    mod: new Sluts()
};