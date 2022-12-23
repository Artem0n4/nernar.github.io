/*

    Inner Core Docs: Inner Core, Core Engine and Horizon documentation
    Copyright (C) 2022  Nernar (https://github.com/nernar)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

	Maintained and distributed by MaXFeeD (maxfeed.nernar@outlook.com)

*/
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	tutorialSidebar: [
		{
			type: 'doc',
			id: 'intro'
		},
		{
			type: 'category',
			label: 'Getting Started',
			link: {
				type: 'generated-index'
			},
			collapsed: false,
			items: [
				'getting-started/methodology',
				'getting-started/supporting-ides',
				'getting-started/going-forward'
			]
		},
		{
			type: 'category',
			label: 'Basics',
			link: {
				type: 'generated-index'
			},
			items: [
				'basics/mod-structure',
				'basics/mod-lifecycle',
				'basics/building-script',
				'basics/evaluate-context',
				'basics/integrating-libraries',
				'basics/wrapping-packages'
			]
		},
		{
			type: 'category',
			label: 'Events',
			link: {
				type: 'generated-index'
			},
			items: [
				'events/where-what-and-who',
				'events/callbacks',
				'events/updatables',
				'events/threading',
				'events/using-synced-data'
			]
		},
		{
			type: 'category',
			label: 'Items',
			link: {
				type: 'generated-index'
			},
			items: [
				'items/first-item',
				'items/food-armor-and-throwables',
				'items/recipes',
				'items/tools',
				{
					type: 'category',
					label: 'Extra',
					link: {
						type: 'generated-index'
					},
					items: [
						'items/extra/what-is-extra',
						'items/extra/enchanting',
						'items/extra/using-tags'
					]
				}
			]
		},
		{
			type: 'category',
			label: 'Blocks',
			link: {
				type: 'generated-index'
			},
			items: [
				'blocks/first-block',
				'blocks/first-liquid',
				{
					type: 'category',
					label: 'Renders',
					link: {
						type: 'generated-index'
					},
					items: [
						'blocks/renders/vanilla-shapes',
						'blocks/renders/block-renderer',
						'blocks/renders/conditioning',
						'blocks/renders/customizing-item'
					]
				},
				'blocks/block-entities'
			]
		},
		{
			type: 'category',
			label: 'Environment',
			link: {
				type: 'generated-index'
			},
			items: [
				'environment/modifying-region',
				'environment/game-objects',
				'environment/animation',
				'environment/particles',
				'environment/shaders-and-materials'
			]
		},
		{
			type: 'category',
			label: 'Entities',
			link: {
				type: 'generated-index'
			},
			items: [
				'entities/actoring-entities',
				'entities/first-entity',
				{
					type: 'category',
					label: 'Renders',
					link: {
						type: 'generated-index'
					},
					items: [
						'entities/renders/rendering-basics',
						'entities/renders/animating-in-runtime',
						'entities/renders/attaching-renders'
					]
				},
				'entities/path-navigation'
			]
		},
		{
			type: 'category',
			label: 'Dimensions',
			link: {
				type: 'generated-index'
			},
			items: [
				'dimensions/ore-with-manual-generation',
				'dimensions/first-dimension',
				'dimensions/creating-biomes',
				'dimensions/investigating-generators'
			]
		},
		{
			type: 'category',
			label: 'UIs',
			link: {
				type: 'generated-index'
			},
			items: [
				'ui/investigating-contents',
				'ui/window-types',
				'ui/drawings',
				'ui/elements',
				'ui/extending-components'
			]
		},
		{
			type: 'category',
			label: 'Storage',
			link: {
				type: 'generated-index'
			},
			items: [
				'storage/saving-basics',
				'storage/file-system',
				'storage/processing-resources'
			]
		},
		{
			type: 'category',
			label: 'Containers',
			link: {
				type: 'generated-index'
			},
			items: [
				'containers/principles-and-objectives',
				'containers/tile-entities'
			]
		},
		{
			type: 'category',
			label: 'Structures',
			link: {
				type: 'generated-index'
			},
			items: [
				{
					type: 'autogenerated',
					dirName: 'structures'
				}
			]
		},
		{
			type: 'category',
			label: 'Publishing',
			link: {
				type: 'generated-index'
			},
			items: [
				'publishing/connecting-integrations',
				'publishing/debugging',
				'publishing/packing-to-publish',
				'publishing/uploading-and-community'
			]
		},
		{
			type: 'doc',
			id: 'future-steps'
		}
	]
};
