<?php

	namespace App\Enum\Attributes;

	use Attribute;

	/**
	 *
	 */
	#[Attribute(Attribute::TARGET_CLASS_CONSTANT)]
	class Slug
	{
		/**
		 * @param string $slug
		 */
		public function __construct(public string $slug) {}
	}
