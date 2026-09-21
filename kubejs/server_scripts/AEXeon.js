// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//#################### RECIPES ####################
ServerEvents.recipes(event => {

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
      P: 'minecraft:netherite_pickaxe'
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
    Item.of('waystones:light_gray_sharestone', 1),
    [
      'waystones:waystone'
    ]
  )
  event.shapeless(
    Item.of('waystones:waystone', 1),
    [
      '#waystones:sharestones'
    ]
  )

  //Warden Tendril <=> Warden Receptor
  event.shapeless(
    Item.of('apothic_enchanting:warden_tendril', 1),
    [
      'cagedmobs:warden_receptor'
    ]
  )
  event.shapeless(
    Item.of('cagedmobs:warden_receptor', 1),
    [
      'apothic_enchanting:warden_tendril'
    ]
  )

  event.shapeless(
    Item.of('floralis:black_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/black',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:red_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/red',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:blue_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/blue',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:light_blue_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/light_blue',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:green_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/green',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:yellow_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/yellow',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:magenta_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/magenta',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:purple_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/purple',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:pink_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/pink',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:gray_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/gray',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:brown_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/brown',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:light_gray_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/light_gray',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:lime_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/lime',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:white_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/white',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:cyan_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/cyan',
      '#c:fertilizers'
    ]
  )
  event.shapeless(
    Item.of('floralis:orange_flower_seeds', 1),
    [
      '#c:seeds',
      '#c:dyes/orange',
      '#c:fertilizers'
    ]
  )

  //Create support for SilentGear
  event.recipes.create.crushing(['silentgear:crushed_shulker_shell'], ['minecraft:shulker_shell'])
  event.recipes.create.crushing(['silentgear:crimson_iron_dust'], ['silentgear:crimson_iron_ingot'])
  event.recipes.create.crushing(['silentgear:azure_electrum_dust'], ['silentgear:azure_electrum_ingot'])
  event.recipes.create.crushing(['silentgear:blaze_gold_dust'], ['silentgear:blaze_gold_ingot'])
  event.recipes.create.crushing(['silentgear:azure_silver_dust'], ['silentgear:azure_silver_ingot'])
  event.recipes.create.crushing(['silentgear:tyrian_steel_dust'], ['silentgear:tyrian_steel_ingot'])
  event.recipes.create.crushing(['silentgear:crimson_steel_dust'], ['silentgear:crimson_steel_ingot'])

})


//#################### TAGS ####################
ServerEvents.tags('item', event => {

  //Tag for torches (for MegaTorch)
  event.add('forge:torches', 'minecraft:torch')
  event.add('forge:torches', 'silentgear:stone_torch')

})
