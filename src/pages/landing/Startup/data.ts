// types
import { Integration, PlanFeature } from './types'

// images
import slack from '/assets/images/brands/slack.png'
import fb from '/assets/images/brands/fb.png'
import salesforce from '/assets/images/brands/salesforce.jpg'
import at from '/assets/images/brands/at.png'
import gsheet from '/assets/images/brands/gsheet.png'
import ac from '/assets/images/brands/ac.jpeg'

const integrations: Integration[] = [
	{
		appLogo: slack,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		appLogo: fb,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		appLogo: salesforce,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		appLogo: at,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		appLogo: gsheet,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		appLogo: ac,
		app: 'Lorem Ipsum',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
]

const planFeatures: PlanFeature[] = [
	{
		name: 'Lorem Ipsum',
		starter: {
			available: true,
		},
		professional: {
			available: true,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
		},
		professional: {
			available: true,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: true,
		},
		professional: {
			available: true,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
			addon: true,
		},
		professional: {
			available: false,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
		},
		professional: {
			available: false,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
		},
		professional: {
			available: false,
			addon: true,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
		},
		professional: {
			available: true,
		},
		enterprise: {
			available: true,
		},
	},
	{
		name: 'Lorem Ipsum',
		starter: {
			available: false,
		},
		professional: {
			available: true,
		},
		enterprise: {
			available: true,
		},
	},
]

export { integrations, planFeatures }
