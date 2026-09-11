// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//#################### RECIPES ####################
ServerEvents.recipes(event => {

  //Replace ClickMachine recipe
  event.remove({ output: 'clickmachine:auto_clicker' })
  event.shaped(
    Item.of('clickmachine:auto_clicker', 1),
    [
      'IAI',
      'TFC',
      'ILI'
    ],
    {
      A: 'minecraft:armor_stand',
      I: 'minecraft:iron_ingot',
      C: 'minecraft:comparator',
      T: 'minecraft:redstone_torch',
      F: '#aex:frames',
      L: 'minecraft:clock'
    }
  )

  //Create Mana Fabricator recipe
  event.remove({ output: 'arstechnic:mana_fabricator' })
  event.shaped(
    Item.of('arstechnic:mana_fabricator', 1),
    [
      'RZS',
      'BAT',
      'RJS'
    ],
    {
      R: 'minecraft:redstone_block',
      Z: 'ars_nouveau:ritual_brazier',
      S: 'ars_nouveau:source_gem_block',
      B: '#aex:batteries',
      A: 'ars_nouveau:arcane_core',
      T: 'ars_nouveau:basic_spell_turret',
      J: 'ars_nouveau:source_jar'
    }
  )

  //Replace JAMD Portals recipes
  event.remove({ output: 'jamd:portal_block' })
  event.shaped(
    Item.of('jamd:portal_block', 1),
    [
      'BBB',
      'BPB',
      'BBB'
    ],
    {
      B: '#minecraft:planks',
      P: 'minecraft:stone_pickaxe'
    }
  )

  event.remove({ output: 'jamd:nether_portal' })
  event.shaped(
    Item.of('jamd:nether_portal', 1),
    [
      'BBB',
      'BPB',
      'BBB'
    ],
    {
      B: 'minecraft:netherrack',
      P: 'minecraft:iron_pickaxe'
    }
  )

  event.remove({ output: 'jamd:end_portal' })
  event.shaped(
    Item.of('jamd:end_portal', 1),
    [
      'BBB',
      'BPB',
      'BBB'
    ],
    {
      B: 'minecraft:end_stone',
      P: 'minecraft:diamond_pickaxe'
    }
  )

  //Add recipe for Sapphire block
  event.shapeless(
    Item.of('thermal:sapphire', 9),
    [
      'thermal:sapphire_block'
    ]
  )
  event.shaped(
    Item.of('thermal:sapphire_block', 1),
    [
      'SSS',
      'SSS',
      'SSS'
    ],
    {
      S: '#forge:gems/sapphire'
    }
  )
  //Add recipe for Ruby block
  event.shapeless(
    Item.of('thermal:ruby', 9),
    [
      'thermal:ruby_block'
    ]
  )
  event.shaped(
    Item.of('thermal:ruby_block', 1),
    [
      'SSS',
      'SSS',
      'SSS'
    ],
    {
      S: '#forge:gems/ruby'
    }
  )

  //Accept more torches for MegaTorch
  event.remove({ output: 'torchmaster:megatorch' })
  event.shaped(
    Item.of('torchmaster:megatorch', 1),
    [
      'TTT',
      'DLD',
      'GLG'
    ],
    {
      T: '#forge:torches',
      D: 'minecraft:diamond',
      L: '#minecraft:logs',
      G: 'minecraft:gold_block'
    }
  )

  //Upgrade recipe for Trader -> Auto Trader
  event.shaped(
    Item.of('easy_villagers:auto_trader', 1),
    [
      'T',
      'N'
    ],
    {
      T: 'easy_villagers:trader',
      N: 'minecraft:netherite_ingot'
    }
  )

  //Waystones <=> Sharestones
  event.shapeless(
    Item.of('waystones:sharestone', 1),
    [
      'waystones:waystone'
    ]
  )
  event.shapeless(
    Item.of('waystones:waystone', 1),
    [
      'waystones:sharestone'
    ]
  )

  //Warden Tendril <=> Warden Receptor
  event.shapeless(
    Item.of('apotheosis:warden_tendril', 1),
    [
      'cagedmobs:warden_receptor'
    ]
  )
  event.shapeless(
    Item.of('cagedmobs:warden_receptor', 1),
    [
      'apotheosis:warden_tendril'
    ]
  )

  //Interchangable Soulbound books
  event.shapeless(
    Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:1,id:"enderio:soulbound"}]}),
    [
    Item.of('minecraft:enchanted_book', "{StoredEnchantments:[{lvl:1,id:'ars_elemental:soulbound'}]}").strongNBT()
    ]
  )
  event.shapeless(
    Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:1,id:"ars_elemental:soulbound"}]}),
    [
      Item.of('minecraft:enchanted_book', "{StoredEnchantments:[{lvl:1,id:'ensorcellation:soulbound'}]}").strongNBT()
    ]
  )
  event.shapeless(
    Item.of('minecraft:enchanted_book', {StoredEnchantments:[{lvl:1,id:"ensorcellation:soulbound"}]}),
    [
      Item.of('minecraft:enchanted_book', "{StoredEnchantments:[{lvl:1,id:'enderio:soulbound'}]}").strongNBT()
    ]
  )

  //Create support for SilentGear
  event.recipes.create.crushing('silentgear:crushed_shulker_shell', 'minecraft:shulker_shell')
  event.recipes.create.crushing('silentgear:crimson_iron_dust', 'silentgear:crimson_iron_ingot')
  event.recipes.create.crushing('silentgear:azure_electrum_dust', 'silentgear:azure_electrum_ingot')
  event.recipes.create.crushing('silentgear:blaze_gold_dust', 'silentgear:blaze_gold_ingot')
  event.recipes.create.crushing('silentgear:azure_silver_dust', 'silentgear:azure_silver_ingot')
  event.recipes.create.crushing('silentgear:tyrian_steel_dust', 'silentgear:tyrian_steel_ingot')
  event.recipes.create.crushing('silentgear:crimson_steel_dust', 'silentgear:crimson_steel_ingot')

  //Thermal support for SilentGear
   event.recipes.thermal.pulverizer('silentgear:crushed_shulker_shell','minecraft:shulker_shell')
  event.recipes.thermal.pulverizer('silentgear:crimson_iron_dust', 'silentgear:crimson_iron_ingot')
  event.recipes.thermal.pulverizer('silentgear:azure_electrum_dust', 'silentgear:azure_electrum_ingot')
  event.recipes.thermal.pulverizer('silentgear:blaze_gold_dust', 'silentgear:blaze_gold_ingot')
  event.recipes.thermal.pulverizer('silentgear:azure_silver_dust', 'silentgear:azure_silver_ingot')
  event.recipes.thermal.pulverizer('silentgear:tyrian_steel_dust', 'silentgear:tyrian_steel_ingot')
  event.recipes.thermal.pulverizer('silentgear:crimson_steel_dust', 'silentgear:crimson_steel_ingot')

  //Mekanism support for SilentGear
  event.recipes.mekanism.crushing('silentgear:crushed_shulker_shell','minecraft:shulker_shell')
  event.recipes.mekanism.crushing('silentgear:crimson_iron_dust', 'silentgear:crimson_iron_ingot')
  event.recipes.mekanism.crushing('silentgear:azure_electrum_dust', 'silentgear:azure_electrum_ingot')
  event.recipes.mekanism.crushing('silentgear:blaze_gold_dust', 'silentgear:blaze_gold_ingot')
  event.recipes.mekanism.crushing('silentgear:azure_silver_dust', 'silentgear:azure_silver_ingot')
  event.recipes.mekanism.crushing('silentgear:tyrian_steel_dust', 'silentgear:tyrian_steel_ingot')
  event.recipes.mekanism.crushing('silentgear:crimson_steel_dust', 'silentgear:crimson_steel_ingot')

  //EnderIO support for SilentGear
  event.recipes.enderio.sag_milling('silentgear:crushed_shulker_shell','minecraft:shulker_shell')
  event.recipes.enderio.sag_milling('silentgear:crimson_iron_dust', 'silentgear:crimson_iron_ingot')
  event.recipes.enderio.sag_milling('silentgear:azure_electrum_dust', 'silentgear:azure_electrum_ingot')
  event.recipes.enderio.sag_milling('silentgear:blaze_gold_dust', 'silentgear:blaze_gold_ingot')
  event.recipes.enderio.sag_milling('silentgear:azure_silver_dust', 'silentgear:azure_silver_ingot')
  event.recipes.enderio.sag_milling('silentgear:tyrian_steel_dust', 'silentgear:tyrian_steel_ingot')
  event.recipes.enderio.sag_milling('silentgear:crimson_steel_dust', 'silentgear:crimson_steel_ingot')

})


//#################### TAGS ####################
ServerEvents.tags('item', event => {

  //Make jetpacks Soulboundable
  event.add('ars_elemental:soulbound_extra', 'mekanism:jetpack'),
  event.add('ars_elemental:soulbound_extra', 'mekanism:jetpack_armored'),
  event.add('ars_elemental:soulbound_extra', '#create_sa:jetpack'),
  event.add('ars_elemental:soulbound_extra', '#simplyjetpacks:jetpack'),
  //Make jetpacks curios
  event.add('curios:jetpack', 'mekanism:jetpack'),
  event.remove('curios:body', 'ironjetpacks:jetpack'),	//Move from body to jetpack
  event.add('curios:jetpack', 'ironjetpacks:jetpack'),
  //Tag for machine frames (for ClickMachine)
  event.add('aex:frames', 'industrialforegoing:machine_frame_pity'),
  event.add('aex:frames', 'thermal:machine_frame'),
  event.add('aex:frames', 'rftoolsbase:machine_frame'),
  event.add('aex:frames', 'enderio:void_chassis'),
  //Tag for batteries (for Ars Technica Mana Fabricator)
  event.add('aex:batteries', 'fluxnetworks:basic_flux_storage'),
  event.add('aex:batteries', 'integrateddynamics:energy_battery'),
  event.add('aex:batteries', 'powah:energy_cell_starter'),
  event.add('aex:batteries', 'mekanism:basic_energy_cube'),
  event.add('aex:batteries', 'thermal:energy_cell'),
  event.add('aex:batteries', 'rftoolspower:cell1'),
  //Tag for torches (for MegaTorch)
  event.add('forge:torches', 'minecraft:torch'),
  event.add('forge:torches', 'silentgear:stone_torch'),
  event.add('forge:torches', 'aquatictorches:aquatic_torch')

})